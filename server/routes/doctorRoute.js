const express = require('express');
const { DoctorController } = require('../controllers/doctor/doctorRegistration'); 
const { doctorLogin } = require('../controllers/doctor/doctorLogin');
const ApprovedController = require("../controllers/doctor/adminApproved");
const router = express.Router();
require("../db/connection")

// PUBLIC ROUTES
router.post("/doctor_signUp", DoctorController.doctorRegistration);
router.patch("/approved", ApprovedController.approved);
router.patch("/reject", ApprovedController.reject);
router.post("/doctor_signIn", doctorLogin);
router.get("/get-doctors", ApprovedController.getAllDoctors);
router.get("/get-user/:id", ApprovedController.getDoctor);

router.post("/mail_verification/:id",DoctorController.mailVerification )
// "http://localhost:3000/mail-verification?id='+savedUser._id+'"

module.exports = router;