const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const doctorsSchema = new mongoose.Schema({
    fullName: { type: String, required: true, trim: true },
    email: { type: String, trim: true, required: true, unique: true },
    license:{ type: String, trim: true },
    password: { type: String, required: true, trim: true },
    is_approved: { type: Boolean, default: false },
    is_verified: { type: Boolean, default: false },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: { type: Date },
});

const Doctor = mongoose.model("doctors", doctorsSchema);
module.exports = Doctor;