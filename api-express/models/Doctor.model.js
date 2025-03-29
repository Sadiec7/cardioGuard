const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  specialty: { type: String, required: true },
  patients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Patient" }], // Array de pacientes
  phone: { type: String },
  clinic: { type: String },
});

module.exports = mongoose.model("Doctor", doctorSchema);
