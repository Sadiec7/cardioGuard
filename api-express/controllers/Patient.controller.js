const SensorReading = require("../models/SensorReading.model");

// Obtener lecturas propias (para el paciente)
exports.getMyReadings = async (req, res) => {
  try {
    const readings = await SensorReading.find({
      patient: req.params.patientId,
    })
      .sort({ timestamp: -1 })
      .limit(50); // Últimas 50 lecturas
    res.json(readings);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener lecturas" });
  }
};

// Obtener estadísticas resumidas (ej: promedio de señal)
exports.getMyStats = async (req, res) => {
  try {
    const stats = await SensorReading.aggregate([
      { $match: { patient: req.params.patientId } },
      {
        $group: {
          _id: null,
          avgSignal: { $avg: "$Signal" },
          maxSignal: { $max: "$Signal" },
        },
      },
    ]);
    res.json(stats[0] || {});
  } catch (error) {
    res.status(500).json({ error: "Error al calcular estadísticas" });
  }
};
