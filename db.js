// db.js - MongoDB configuration
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/omaop_real_estate', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;

// models/User.js - User model
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String },
  role: { type: String, default: 'user' }, // Example: 'admin', 'user', etc.
});

// Hash password before saving to database
UserSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;