const Doctor = require("../../models/Doctor.js"); // ✅ Correct model
const { hashPassword } = require("../../helpers/hashPassword");
const { createToken } = require("../../helpers/jwt");
const compileEmailTemplate = require("../../helpers/compile-email-template.js");
const mailer = require("../../libs/mailer.js");

class DoctorController {
  static doctorRegistration = async (req, res) => {
    try {
      const {
        fullName,
        email,
        password,
        confirmPassword,
        license, // This is base64 string
      } = req.body;

      if (!fullName || !email || !password || !confirmPassword || !license) {
        return res
          .status(422)
          .json({ error: "Please fill in all required fields properly" });
      }

      // Check if doctor already exists
      const existingDoctor = await Doctor.findOne({ email });
      if (existingDoctor) {
        return res.status(422).json({ error: "Doctor already exists" });
      }

      if (password !== confirmPassword) {
        return res.status(422).json({
          error: "Password and Confirm Password don't match",
        });
      }

      // Parse base64 license image
      const matches = license.match(/^data:(.+);base64,(.+)$/);
      if (!matches || matches.length !== 3) {
        return res.status(422).json({ error: "Invalid license image format" });
      }

      const contentType = matches[1];
      const base64Data = matches[2];
      const licenseBuffer = Buffer.from(base64Data, "base64");

      // Hash password
      const hashedPassword = await hashPassword(password);

      // Create new doctor with license as Buffer + contentType
      const newDoctor = new Doctor({
        fullName,
        email,
        password: hashedPassword,
        license: {
          data: licenseBuffer,
          contentType: contentType,
        },
        is_verified: false,
        is_approved: false,
      });

      const savedDoctor = await newDoctor.save();

      // Generate JWT token
      const token = createToken(savedDoctor, false, "1d");

      // Store token
      savedDoctor.tokens.push({ token });
      await savedDoctor.save();

      console.log("Doctor registered successfully, sending verification email...");

      const template = await compileEmailTemplate({
        fileName: "register.mjml",
        data: { fullName },
      });

      try {
        await mailer.sendMail(email, "Mail Verification", template);
        return res.status(201).json({
          status: "success",
          message: "Doctor registered successfully",
          token,
        });
      } catch (emailError) {
        console.error("Failed to send registration email:", emailError);
        return res.status(500).json({
          error: "Doctor registered, but failed to send verification email",
        });
      }
    } catch (error) {
      console.error("Error in doctor registration:", error);
      return res.status(500).json({ error: "Registration failed" });
    }
  };

  static mailVerification = async (req, res) => {
    try {
      const id = req.params.id;
      const doctor = await Doctor.findById(id);

      if (!doctor) {
        return res.status(404).json({ error: "Doctor not found" });
      }

      doctor.is_verified = true;
      await doctor.save();

      return res.status(200).json({
        status: "success",
        message: "Email verified successfully",
        doctor,
      });

    } catch (error) {
      console.error("Error verifying doctor email:", error);
      return res.status(500).json({ error: "Failed to verify email" });
    }
  };
}

module.exports = { DoctorController };
