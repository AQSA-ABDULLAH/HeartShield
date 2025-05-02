const express = require('express');
const { DoctorController } = require('../controllers/doctor/doctorRegistration'); 
const { doctorLogin } = require('../controllers/doctor/doctorLogin');
const router = express.Router();
require("../db/connection")

// PUBLIC ROUTES
router.post("/doctor_signUp", DoctorController.doctorRegistration);
router.post("/doctor_signIn", doctorLogin);

router.post("/mail_verification/:id",DoctorController.mailVerification )
// "http://localhost:3000/mail-verification?id='+savedUser._id+'"

module.exports = router;