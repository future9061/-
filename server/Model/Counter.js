const mongoose = require('mongoose');

const couterSchema = new mongoose.Schema({
  name: String,
  postNum: Number,
  userNum: Number
}, { collation: { locale: 'en_US', strength: 1 } });

const Counter = mongoose.model('Counter', couterSchema);

module.exports = { Counter }