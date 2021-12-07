const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
    teacherId: {
        type: Number,
        required: [true, "Teacher Id is required"]
    },
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    education: {
        type: String,
        required: [true, "Education is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
}, { timestamps: true });

module.exports = mongoose.model("Teacher", teacherSchema);