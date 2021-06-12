const mongoose = require('mongoose')

const signupTemplate = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('admin', signupTemplate)