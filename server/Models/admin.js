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

// UserSchema.pre('save', async function (next) {
//   try {
//     if (!this.isModified('password')) {
//       return next()
//     }
//     const hashed = await bcrypt.hash(this.password, 10)
//     this.password = hashed
//     return next()
//   } catch (err) {
//     return next(err)
//   }
// })

signupTemplate.methods.comparePassword = function (attempt, next) {
  try {
    return (attempt===this.password)
  } catch (err) {
    next(err)
  }
}

module.exports = mongoose.model('admin', signupTemplate)