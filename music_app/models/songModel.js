const mongoose = require('mongoose');
const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'song must have a name'],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: true,
    default: 100,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  url: {
    type: String,
    required: [true, 'song must have a url'],
    trim: true,
  },
  slug: String,
  backgroundImage: {
    type: String,
    default: '/images/OIP.jpg',
  },
  imageUrl: {
    type: String,
    default: '/images/OIP.jpg',
  },
  lyrics: String,
  status: {
    type: String,
    enum: {
      values: ['PUBLIC', 'VIP'],
      message: 'Status only inlucdes PUBLIC or VIP',
    },
  },
  view: {
    type: Number,
    default: 0,
  },
  //embedding file
  files: [
    {
      link: String,
    },
  ],
  // ref album id 2 way-ref
  album: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Album',
    },
  ],
  artist: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Artist',
    },
  ],
});
const Song = mongoose.model('Song', songSchema);

module.exports = Song;
