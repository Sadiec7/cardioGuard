const mongoose = require('mongoose');

const sensorDataSchema = new mongoose.Schema({
  ecg: {
    type: Number,
    required: true,
    default: 0  // Valor por defecto como aparece en tus datos
  },
  bpm: {
    type: Number,
    required: true,
    default: 0  // Valor por defecto como aparece en tus datos
  },
  device_id: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: {  // Habilita createdAt y updatedAt automáticamente
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  },
  collection: 'ecgs'  // Nombre exacto de tu colección en MongoDB
});

// Añadir índice para búsquedas más eficientes
sensorDataSchema.index({ device_id: 1, createdAt: -1 });

const SensorData = mongoose.model('SensorData', sensorDataSchema);

module.exports = SensorData;