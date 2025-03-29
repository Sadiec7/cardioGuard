const express = require('express');
const router = express.Router();
const sensorDataController = require('../controllers/sensorData.controller');

// POST /api/sensor-data
router.post('/', sensorDataController.createData);

// GET /api/sensor-data
router.get('/', sensorDataController.getAllData);

module.exports = router;