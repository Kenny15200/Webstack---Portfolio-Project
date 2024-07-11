const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  appointmentDate: Date,
  appointmentTime: String,
});

module.exports = mongoose.model('Appointment', appointmentSchema);
