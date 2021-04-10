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
    sold: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('player', signupTemplate)