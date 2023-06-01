const mongoose = require('mongoose');

const comment = mongoose.Schema(
  {
    createAt: {
      type: Date,
      default: Date.now(),
    },
    content: {
      type: String,
      required: [true, 'Comment need a content'],
      trim: true,
    },
    // ref parrent
    song: {
      type: mongoose.Schema.ObjectId,
      ref: 'Song',
      required: [true, 'Comment must be long to song'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Comment must be long to user'],
    },
  },
  {
    toJSON: { virtual: true },
    toObject: { virtual: true },
  }
);

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
