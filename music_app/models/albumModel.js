const mongoose = require('mongoose');

const albumSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Album must have a name'],
    trim: true,
  },
  slug: String,
  createAt: {
    type: Date,
    default: Date.now(),
  },
  backgroudImage: {
    type: String,
    required: [true, 'Album must have backgroudImage'],
  },
  desciption: {
    type: String,
    required: [true, 'Album must have description'],
  },
  title: {
    type: String,
    required: [true, 'Album must have title'],
  },
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;
