const mongoose = require('mongoose');

const likeSchema = mongoose.Schema({
  likeAt: {
    type: Date,
    default: Date.now(),
  },
});

const Like = mongoose.model('Like', likeSchema);
module.exports = Like;
