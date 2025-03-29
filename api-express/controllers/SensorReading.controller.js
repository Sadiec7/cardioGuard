const SensorReading = require("../models/SensorReading.model");
const { Parser } = require("json2csv");

exports.createReading = async (req, res) => {
  try {
    const { Signal, BPW, BPW_Avg, device_id } = req.body;

    // Validación básica
    if (Signal === undefined || BPW === undefined || BPW_Avg === undefined) {
      return res.status(400).json({ error: "Faltan campos requeridos" });
    }

    const newReading = new SensorReading({
      Signal,
      BPW,
      BPW_Avg,
      device_id,
      // timestamp se añade automáticamente
    });

    await newReading.save();
    res.status(201).json(newReading);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getReadings = async (req, res) => {
  try {
    const { device_id, start, end, limit = 100 } = req.query;
    const filter = {};

    if (device_id) filter.device_id = device_id;

    if (start && end) {
      filter.timestamp = {
        $gte: new Date(start),
        $lte: new Date(end),
      };
    }

    const readings = await SensorReading.find(filter)
      .sort({ timestamp: -1 })
      .limit(Number(limit));

    res.json(readings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.exportToCSV = async (req, res) => {
  try {
    const data = await SensorReading.find({}).lean();

    const fields = [
      "Signal",
      "BPW",
      "BPW_Avg",
      "device_id",
      {
        label: "Timestamp",
        value: "timestamp",
      },
    ];

    const parser = new Parser({ fields });
    const csv = parser.parse(data);

    res.header("Content-Type", "text/csv");
    res.attachment(`sensor_readings_${new Date().toISOString()}.csv`);
    res.send(csv);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
