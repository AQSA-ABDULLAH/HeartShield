const Patient = require("../../models/PatientRoutes.js");
const { hashPassword } = require("../../helpers/hashPassword");
const { createToken } = require("../../helpers/jwt");
const compileEmailTemplate = require("../../helpers/compile-email-template.js");
const mailer = require("../../libs/mailer.js");

class UserController {
    static userRegistration = async (req, res) => {
        try {
            const { fullName, email, phoneNumber, password, confirmPassword, age } = req.body;

            if (!fullName || !email || !password || !confirmPassword || !age) {
                return res.status(422).json({ error: "Please fill in all fields properly" });
            }

            const userExist = await Patient.findOne({ email });

            if (userExist) {
                return res.status(422).json({ error: "User already exists" });
            }

            if (password !== confirmPassword) {
                return res.status(422).json({
                    error: "Password and Confirm Password don't match",
                });
            }

            const hashedPassword = await hashPassword(password);

            const newUser = new Patient({
                fullName,
                email,
                phoneNumber,
                password: hashedPassword,
                age,
                is_admin: false,
                is_verified: false,
            });

            const savedUser = await newUser.save();

            // Create JWT Token
            const token = createToken(savedUser, savedUser.is_admin, "1d");

            // Add token to the user's tokens array
            savedUser.tokens.push({ token });
            await savedUser.save();

            console.log("User saved successfully, preparing to send email...");

            // Email template
            const template = await compileEmailTemplate({
                fileName: "register.mjml",
                data: {
                    fullName,
                },
            });

            try {
                await mailer.sendMail(email, "Mail Verification", template);
                return res.status(201).json({
                    status: "success",
                    message: "User created successfully",
                    token,
                });
            } catch (emailError) {
                console.error("Failed to send registration email:", emailError);
                return res.status(500).json({
                    error: "User registered, but failed to send email",
                });
            }

        } catch (error) {
            console.error("Error in user registration:", error);
            return res.status(500).json({ error: "Failed to register" });
        }
    }

    static mailVerification = async (req, res) => {
        try {
            const id = req.params.id;
            const user = await Patient.findById(id);

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            user.is_verified = true;
            await user.save();

            return res.status(200).json({
                status: "success",
                message: "Email verified successfully",
                user,
            });

        } catch (error) {
            console.error("Error in user verification:", error);
            return res.status(500).json({ error: "Failed to verify user" });
        }
    };
}

module.exports = { UserController };