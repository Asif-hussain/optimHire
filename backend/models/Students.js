const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    math: {
        type: Number,
        required: true
    },
    computer: {
        type: Number,
        required: true
    }
});


const studentModel = mongoose.model("students", studentSchema);

module.exports = studentModel;