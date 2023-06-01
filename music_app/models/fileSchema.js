const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'File must have a name'],
  },
  type: String,
  enum: {
    values: ['mp3', 'mp4', 'wav'],
    message: 'type includes mp3, mp4 and wav files',
  },
});

const File = mongoose.model('File', fileSchema);
module.exports = File;
