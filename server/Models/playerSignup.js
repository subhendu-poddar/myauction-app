const mongoose = require('mongoose')

const signupTemplate = new mongoose.Schema({
    name: {
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
    baseBidAmount: {
        type: Number,
        required: true
    },
    soldTo: {
        type: String
    },
    bidAmount: {
        type: Number
    },    
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('player', signupTemplate)