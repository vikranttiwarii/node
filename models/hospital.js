const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 100
    },
    healthIssues: {
        type: String,
        required: true
    },
    pastTreatmentHistory: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    discount: {
        type: Number
    }
})

module.exports = new mongoose.model('hospital', Schema)