// app.js

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('./config/passport-config');
const db = require('./db');
const authRoutes = require('./routes/auth-routes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(passport.initialize());

// Routes
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
