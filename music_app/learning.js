const mongoose = require('mongoose');

const testShema = mongoose.Schema({
  name: {
    type: String,
  },
  location: [
    {
      type: {
        type: String,
        default: 'Point',
        emun: ['Point'],
      },
      localStorage: [Number],
    },
  ],
  // reference
  user: [
    {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
  ]
});
