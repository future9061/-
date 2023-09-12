const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  postNum: Number,
  image: String
}, { collation: { locale: 'en_US', strength: 1 } });

const Post = mongoose.model('Post', postSchema);

module.exports = { Post }