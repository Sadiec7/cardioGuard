require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { Transform } = require('stream');
const { Parser } = require('json2csv');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuración de conexión a MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'iot_data',
      maxPoolSize: 10 // Conexiones máximas
    });
    console.log('✅ Conectado a MongoDB | Base de datos: iot_data');
    return conn.connection;
  } catch (error) {
    console.error('❌ Error de conexión:', error.message);
    process.exit(1);
  }
};

// Middleware
app.use(express.json());
app.timeout = 600000; // 10 minutos timeout

// Variable de conexión
let dbConnection;

app.get('/export-pulso-csv', async (req, res) => {
  console.log('⚡ Iniciando exportación de datos de pulso...');
  
  try {
    if (!dbConnection || dbConnection.readyState !== 1) {
      dbConnection = await connectDB();
    }

    const db = dbConnection.db;
    const collection = db.collection('pulso');

    const documentCount = await collection.countDocuments();
    if (documentCount === 0) {
      console.log('⚠️ Colección "pulso" está vacía');
      return res.status(404).json({
        success: false,
        message: 'La colección pulso no contiene documentos'
      });
    }
    console.log(`📊 Documentos a exportar: ${documentCount}`);

    // Definir los campos con date y time separados
    const fields = [
      { label: 'ID', value: '_id' },
      { label: 'signal', value: 'signal' },
      { label: 'bpm', value: 'bpm' },
      { label: 'avg_bpm', value: 'avg_bpm' },
      { label: 'avg_edge', value: 'avg_edge' },
      { label: 'date', value: row => {
          const date = new Date(row.timestamp);
          return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        } 
      },
      { label: 'time', value: row => {
          const date = new Date(row.timestamp);
          return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
        } 
      }
    ];

    // Crear el parser sin repetir cabeceras en cada chunk
    const parser = new Parser({
      fields,
      delimiter: ',', 
      quote: '"', 
      header: true,  // Solo generar el header una vez
      withBOM: true 
    });

    let headerEmitted = false; // Para evitar repetir la cabecera

    const transformStream = new Transform({
      objectMode: true,
      transform(chunk, encoding, callback) {
        try {
          const data = parser.parse([chunk]); // Convertir solo una fila a CSV
          if (!headerEmitted) {
            this.push(data + '\n'); // Incluir cabecera en el primer chunk
            headerEmitted = true;
          } else {
            this.push(data.split('\n')[1] + '\n'); // Omitir la cabecera en las siguientes líneas
          }
          callback();
        } catch (error) {
          console.error('Error transformando documento:', chunk._id, error);
          callback(null);
        }
      }
    });

    res.header('Content-Type', 'text/csv; charset=utf-8');
    res.attachment(`pulso_export_${new Date().toISOString().split('T')[0]}.csv`);

    let processed = 0;
    const progressStream = new Transform({
      objectMode: true,
      transform(chunk, encoding, callback) {
        processed++;
        if (processed % 1000 === 0 || processed === documentCount) {
          console.log(`🔄 ${processed}/${documentCount} (${Math.round((processed/documentCount)*100)}%)`);
        }
        this.push(chunk);
        callback();
      }
    });

    const cursor = collection.find({})
      .sort({ timestamp: -1 })
      .batchSize(1000)
      .maxTimeMS(300000);

    cursor.stream()
      .pipe(progressStream)
      .pipe(transformStream)
      .pipe(res)
      .on('error', (error) => {
        console.error('💥 Error durante exportación:', error);
        if (!res.headersSent) {
          res.status(500).json({
            success: false,
            message: 'Error durante la generación del CSV',
            error: error.message
          });
        }
      })
      .on('finish', () => {
        console.log(`🎉 Exportación completada! Total: ${processed} documentos`);
      });

  } catch (error) {
    console.error('🔥 Error crítico:', error);
    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        message: 'Error al iniciar la exportación',
        error: error.message
      });
    }
  }
});

// Ruta de verificación mejorada
app.get('/check-db', async (req, res) => {
  try {
    if (!dbConnection || dbConnection.readyState !== 1) {
      dbConnection = await connectDB();
    }
    
    const db = dbConnection.db;
    const stats = await db.collection('pulso').stats();
    
    res.json({
      status: 'OK',
      database: db.databaseName,
      collection: 'pulso',
      documents: stats.count,
      size: (stats.size / (1024 * 1024)).toFixed(2) + ' MB',
      storage: (stats.storageSize / (1024 * 1024)).toFixed(2) + ' MB',
      indexes: stats.nindexes
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});

// Iniciar servidor
(async () => {
  try {
    dbConnection = await connectDB();
    
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
      console.log(`📊 Exportar datos: http://localhost:${PORT}/export-pulso-csv`);
      console.log(`🔍 Verificar BD: http://localhost:${PORT}/check-db`);
    });
  } catch (error) {
    console.error('❌ Falla al iniciar servidor:', error);
    process.exit(1);
  }
})();