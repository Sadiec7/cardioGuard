const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/Doctor.controller');

// Obtener pacientes del doctor
router.get('/:doctorId/patients', doctorController.getAssignedPatients);

// Obtener lecturas de un paciente (para gráficos/alertas)
router.get('/patients/:patientId/readings', doctorController.getPatientReadings);

module.exports = router;