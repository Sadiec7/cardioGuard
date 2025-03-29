const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  message: { type: String, required: true },
  severity: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  read: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Alert", alertSchema);
