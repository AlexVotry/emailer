const mongoose = require('mongoose');
const { Schema } = mongoose;
  // const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

// create new collection called 'users'
mongoose.model('users', userSchema);
