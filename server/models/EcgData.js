const mongoose = require("mongoose");

const ecgDataSchema = new mongoose.Schema(
  {
    // Link to the patient who submitted this data
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "patients", // This must match the model name you used in mongoose.model("patients", ...)
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    cholesterolLevel: {
      type: String, // Using String to accommodate 'mg/dL' or other text
      required: false,
    },
    smokingHistory: {
      type: String,
      required: true,
    },
    bloodPressure: {
      type: String, // Using String to accommodate 'systolic/diastolic'
      required: false,
    },
    // We don't store the file in the DB, just the path to it on the server
    ecgFilePath: {
      type: String,
      required: true,
    },
    // You can add more fields here, like analysis results
    analysisResult: {
      type: String,
      default: "Pending",
    },
  },
  {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true,
  }
);

const EcgData = mongoose.model("EcgData", ecgDataSchema);
module.exports = EcgData;