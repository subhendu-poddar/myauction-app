const mongoose = require('mongoose')

const signupTemplate = new mongoose.Schema({
    teamName:{
        type: String,
        required: true
    },
    manager: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    purseRemaining: {
        type: Number,
        required: true
    },
    playersTaken: [{
        type: String
    }],
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('team', signupTemplate)