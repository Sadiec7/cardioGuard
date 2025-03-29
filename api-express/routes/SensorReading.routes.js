const express = require('express');
const router = express.Router();
const readingController = require('../controllers/SensorReading.controller');

// POST /api/readings - Crear nueva lectura
router.post('/', readingController.createReading);

// GET /api/readings - Obtener lecturas con filtros opcionales
router.get('/', readingController.getReadings);

// GET /api/readings/export - Exportar a CSV
router.get('/export', readingController.exportToCSV);

module.exports = router;