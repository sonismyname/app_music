const mongoose = require('mongoose');

const artistSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'artist must have full name'],
    trim: true,
  },
  avatarUrl: {
    type: String,
    default:
      'https://iphonecugiare.com/wp-content/uploads/2020/03/90072494_1148106232202126_7381238139576123392_o.jpg',
  },
  backgroundImageUrl: {
    type: String,
    default:
      'https://iphonecugiare.com/wp-content/uploads/2020/03/90072494_1148106232202126_7381238139576123392_o.jpg',
  },
  description: {
    type: String,
  },
  slug: String,
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;
