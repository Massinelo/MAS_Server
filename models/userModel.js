const mongoose = require('mongoose');

// Créer des collections / models

const User = mongoose.model('User', {
  name: {
    type: String,
    default: '',
  },
  city: String,
});

module.exports = User;
