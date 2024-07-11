// app.js

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('./config/passport-config');
const mongoose = require('mongoose');
const Appointment = require('./models/Appointment'); // Appointment model
const Contact = require('./models/Contact'); // Contact model
const authRoutes = require('./routes/auth-routes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

// Routes
app.use('/api/auth', authRoutes);

// Schedule Appointment route
app.post('/schedule-appointment', async (req, res) => {
  try {
    const { fullName, email, phone, appointmentDate, appointmentTime } = req.body;

    // Create new appointment instance
    const newAppointment = new Appointment({
      fullName,
      email,
      phone,
      appointmentDate,
      appointmentTime,
    });

    // Save appointment to database
    await newAppointment.save();

    res.status(200).json({ message: 'Appointment scheduled successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error scheduling appointment' });
  }
});

// Contact Us route
app.post('/contact-us', async (req, res) => {
  try {
    const { fullName, email, message } = req.body;

    // Create new contact instance
    const newContact = new Contact({
      fullName,
      email,
      message,
    });

    // Save contact message to database
    await newContact.save();

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error sending message' });
  }
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/omaop-real-estate', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  // Start server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => console.error('Error connecting to MongoDB', err));
