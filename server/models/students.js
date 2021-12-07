const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    subjects: {
        type: [String],
    },
    teacherId: {
        type: String,
        required: [true, "Teacher Id is required"]
    },
}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);