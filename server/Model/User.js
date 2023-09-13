const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userNum: Number,
  email: String,
  displayName: String,
  uid: String
}, { collation: { locale: 'en_US', strength: 1 } });

const User = mongoose.model('user', userSchema);

module.exports = { User }