const SensorData = require('../models/sensorData.model');

exports.createData = async (req, res) => {
  try {
    const { eeg, heartRate, deviceId } = req.body;
    const newData = new SensorData({ eeg, heartRate, deviceId });
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllData = async (req, res) => {
  try {
    const data = await SensorData.find().sort({ timestamp: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Agrega más métodos según necesites