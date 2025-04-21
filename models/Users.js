const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: String,
  passwordHash: String,
  portfolio: {
    name: String,
    bio: String,
    
    skills: [String], // ✅ Skills array remains as is

    education: [       // ✅ New education array
      {
        course: String,
        school: String,
        yearOfPassing: String, // You can also use Number if preferred
      }
    ],

    projects: [
      {
        title: String,
        description: String,
        githubLink: String,
        liveDemo: String,
      }
    ],

    template: String
  }
});

module.exports = mongoose.model('User', UserSchema);
