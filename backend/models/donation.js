const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
  title: String,
  description: String,
  verification: {
    type: Boolean,
    default: false
  },
  donee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'donees'
  },
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'donors',
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('donations', donationSchema);