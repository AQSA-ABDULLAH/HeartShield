const Patient = require("../../models/Patient");

// GET /get-patients
const EXCLUDED_PATIENT_IDS = ["682a630550eb09e5a9e3c3aa"];

const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find({
      deletedAt: null,
      _id: { $nin: EXCLUDED_PATIENT_IDS },
    });

    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: "Error fetching patients", error });
  }
};


// GET /get-patient/:id
const getPatient = async (req, res) => {
  try {
    const patient = await Patient.findOne({
      _id: req.params.id,
      deletedAt: null,
    });

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: "Error fetching patient", error });
  }
};

// DELETE /delete-patient/:id (Soft Delete)
const deletePatient = async (req, res) => {
  try {
    const deletedPatient = await Patient.findByIdAndDelete(req.params.id);

    if (!deletedPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res
      .status(200)
      .json({
        message: "Patient deleted permanently",
        patient: deletedPatient,
      });
  } catch (error) {
    res.status(500).json({ message: "Error deleting patient", error });
  }
};

module.exports = {
  getAllPatients,
  getPatient,
  deletePatient,
};
