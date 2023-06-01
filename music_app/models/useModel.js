const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'user must have a first name'],
    validate: {
      validator: function (value) {
        return value.length > 3;
      },
      message: 'First name must be at least 3 characters',
    },
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  age: {
    type: Number,
    min: [16, 'Age had to be grater than 16'],
    max: [100, 'Too old to use this app'],
  },
  avatarUrl: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'Email address must be provided'],
    trim: true,
    validate: {
      validator: function (value) {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(value);
      },
      message: 'Email address is not valid',
    },
  },
  password: {
    type: String,
    required: [true, 'Password must be provided'],
    validate: {
      validator: function (value) {
        return value.length > 6;
      },
      message: 'password is to short (>6 characters)',
    },
  },
  // embedding the duty
  duty: [
    {
      title: {
        type: String,
        enum: {
          values: ['ADMIN', 'USER', 'VIP'],
          message: 'Duty includes ADMIN, USER, VIP',
        },
        expiry: Date,
      },
    },
  ],
});
const User = mongoose.model('User', userSchema);

module.exports = User;
