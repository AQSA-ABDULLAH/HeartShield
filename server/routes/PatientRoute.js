const express = require("express");
const { UserController } = require("../controllers/patient/userRegistration"); 
const { userLogin } = require("../controllers/patient/userLogin");
const { ForgetPasswordController } = require("../controllers/patient/forgetPassword");
const ProfileController = require("../controllers/patient/profileController");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();
require("../db/connection");

// PUBLIC ROUTES
router.post("/patient_signUp", UserController.userRegistration);
router.post("/patient_signIn", userLogin);

// FORGET PASSWORD ROUTES
router.post("/forget-password", ForgetPasswordController.forgetPassword);
router.post("/reset-password", ForgetPasswordController.resetPassword);
router.patch("/update-password", ForgetPasswordController.updatePassword);

// PROTECTED ROUTES
router.put("/update-profile", authMiddleware, UserController.updateProfile);
router.put("/change-password", authMiddleware, UserController.changePassword);
router.get("/get-patients", authMiddleware, ProfileController.getAllPatients);
router.get("/get-patient/:id", authMiddleware, ProfileController.getPatient);
router.delete("/delete-patient/:id", authMiddleware, ProfileController.deletePatient);

// Email Verification Route (optional)
// router.post("/mail_verification/:id", UserController.mailVerification);

module.exports = router;
