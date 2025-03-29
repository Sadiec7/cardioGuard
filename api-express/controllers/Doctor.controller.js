const Patient = require("../models/Patient.model");
const SensorReading = require("../models/SensorReading.model");

// Obtener todos los pacientes asignados a un doctor
exports.getAssignedPatients = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.doctorId).populate(
      "patients"
    );
    res.json(doctor.patients);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener pacientes" });
  }
};

// Obtener lecturas recientes de un paciente específico
exports.getPatientReadings = async (req, res) => {
  try {
    const readings = await SensorReading.find({
      patient: req.params.patientId,
    })
      .sort({ timestamp: -1 })
      .limit(100); // Últimas 100 lecturas
    res.json(readings);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener lecturas" });
  }
};
