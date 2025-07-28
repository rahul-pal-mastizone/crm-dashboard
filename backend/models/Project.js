const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  clientName: { type: String, required: true },
  startDate: { type: Date, required: true },
  status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Project', projectSchema);
