const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const donorSchema = mongoose.Schema({
  donor: String,
  telephone: String,
  email: String,
  password: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

donorSchema.pre('save', async function(next) {
  if(!this.isModified('password')) next()
  this.password = await bcrypt.hash(this.password,12)
  next();
});

module.exports = mongoose.model('donors', donorSchema);