const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  birthDate: { type: Date },
  gender: { type: String, enum: ["male", "female", "other"] },
  medicalHistory: {
    allergies: [String],
    chronicConditions: [String],
  },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" }, // Referencia al doctor
  devices: [
    {
      deviceId: { type: String, required: true },
      type: { type: String, default: "heart_sensor" },
      lastConnection: { type: Date },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Patient", patientSchema);
