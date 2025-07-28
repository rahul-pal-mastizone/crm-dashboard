const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  isConverted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Client', clientSchema);
