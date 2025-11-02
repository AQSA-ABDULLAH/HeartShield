const express = require("express");
const router = express.Router();
const ecgController = require("../controllers/patient/ecgController");
const upload = require("../middlewares/multerConfig"); // Import multer config
// You'll likely want auth middleware here too
// const authMiddleware = require('../middleware/auth');

// @route   POST /api/ecg/submit
// @desc    Submit ECG data and file
// @access  Private (should be protected by auth)
router.post(
  "/submit",
  // authMiddleware, // Add this back when auth is ready
  upload.single("ecgFile"), // 'ecgFile' must match the key in FormData
  ecgController.submitEcgData
);

// @route   GET /api/ecg/:patientId
// @desc    Get all ECG records for a patient
// @access  Private
router.get(
  "/:patientId",
  // authMiddleware,
  ecgController.getEcgHistory
);

module.exports = router;