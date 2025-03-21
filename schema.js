const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: [String],
        default: ["user"]
    },
    profile: {
        firstName: {
            type: String,
            trim: true
        },
        lastName: {
            type: String,
            trim: true
        },
        age: {
            type: Number,
            min: 0
        }
    },
    lastLogin: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
