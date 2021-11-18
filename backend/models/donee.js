const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const doneeSchema = mongoose.Schema({
  donee: String,
  telephone: String,
  email: String,
  password: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

doneeSchema.pre('save', async function(next) {
  if(!this.isModified('password')) next()
  this.password = await bcrypt.hash(this.password,12)
  next();
});

module.exports = mongoose.model('donees', doneeSchema);