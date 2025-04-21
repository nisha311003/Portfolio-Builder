const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {type:String, unique:true},
    email: String,
    passwordHash: String,
    portfolio:{
        name: String,
        bio: String,
        skills: [String],
        projects:[
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