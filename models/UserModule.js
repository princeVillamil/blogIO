const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  image: {
    type: String,
    default: 'https://www.nicepng.com/png/detail/202-2024580_png-file-profile-icon-vector-png.png',
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  password: String,
  
})

// Password HASH middleware
UserSchema.pre("save", function save(next){
  const user = this
  if(!user.isModified("password")) return next()
  bcrypt.genSalt(10, (err, salt)=>{
    if(err) return next(err)
    bcrypt.hash(user.password, salt, (err, hash)=>{
      if(err) return next(err)
      user.password = hash
      next()
    })
  })
})
// Helper method for validating users password
UserSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  cb
){
  bcrypt.compare(candidatePassword, this.password, (err, isMatch)=>{
    cb(err, isMatch)
  })
}

module.exports = mongoose.model('User', UserSchema)