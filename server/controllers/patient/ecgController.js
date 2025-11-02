const EcgData = require("../../models/EcgData");
const Patient = require("../../models/Patient");

// POST /api/ecg/submit
// This controller handles the form data and the uploaded file
const submitEcgData = async (req, res) => {
  try {
    const {
      patientId, // Assuming you send this from the frontend
      age,
      gender,
      cholesterolLevel,
      smokingHistory,
      bloodPressure,
    } = req.body;

    // 1. Check if a file was uploaded
    if (!req.file) {
      return res.status(400).json({ message: "No ECG file was uploaded." });
    }

    // 2. Get the path of the uploaded file
    const ecgFilePath = req.file.path;

    // 3. (Optional but recommended) Check if the patientId is valid
    const patient = await Patient.findById(patientId);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found." });
    }

    // 4. Create a new EcgData document
    const newEcgData = new EcgData({
      patientId,
      age,
      gender,
      cholesterolLevel,
      smokingHistory,
      bloodPressure,
      ecgFilePath, // Save the path to the file
    });

    // 5. Save the document to the database
    await newEcgData.save();

    res.status(201).json({
      message: "ECG data submitted successfully!",
      data: newEcgData,
    });
  } catch (error) {
    console.error("Error submitting ECG data:", error);
    res
      .status(500)
      .json({ message: "Error submitting ECG data", error: error.message });
  }
};

// GET /api/ecg/:patientId
// Get all ECG records for a specific patient
const getEcgHistory = async (req, res) => {
  try {
    const patientId = req.params.patientId;
    const records = await EcgData.find({ patientId: patientId }).sort({
      createdAt: -1,
    }); // Sort by newest first

    if (!records) {
      return res
        .status(404)
        .json({ message: "No ECG records found for this patient." });
    }

    res.status(200).json(records);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching ECG history", error: error.message });
  }
};

module.exports = {
  submitEcgData,
  getEcgHistory,
};