const express = require('express');
const router = express.Router();
const patientController = require('../controllers/Patient.controller');

// Obtener lecturas del paciente
router.get('/:patientId/readings', patientController.getMyReadings);

// Obtener estadísticas (para mostrar resumen en la app)
router.get('/:patientId/stats', patientController.getMyStats);

module.exports = router;