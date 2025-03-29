const mongoose = require('mongoose');

const sensorReadingSchema = new mongoose.Schema({
  Signal: {
    type: Number,
    required: true,
    min: 0,
    max: 1023  // Asumiendo un rango típico de señal analógica
  },
  BPW: {
    type: Number,
    required: true,
    default: 0  // Valor por defecto como en tus datos
  },
  BPW_Avg: {
    type: Number,
    required: true,
    default: 0  // Valor por defecto como en tus datos
  },
  device_id: {
    type: String,
    required: true,
    trim: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'sensor_readings',  // Nombre de la colección en MongoDB
  versionKey: false  // Deshabilitar el campo __v
});

// Índices para optimizar consultas
sensorReadingSchema.index({ device_id: 1 });
sensorReadingSchema.index({ timestamp: -1 });

const SensorReading = mongoose.model('SensorReading', sensorReadingSchema);

module.exports = SensorReading;