const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');
const router = express.Router();

router.post('/register', async(req , res)=>{
    const {username, email, password} = req.body;
    try{
        const passwordHash = await bcrypt.hash(password, 10);
        //console.log("Creating user with:", { username, email, passwordHash }); 
        const user = new User({username, email, passwordHash});
        await user.save();
        res.status(201).json({message: "User created"});
    }catch(err){
        console.error(err); 
        res.status(400).json({error: "Registration failed"});
    }
});

router.post('/login', async(req, res)=>{
    const {username, password} = req.body;
    try{
        const user = await User.findOne({username});
        if(!user || !(await bcrypt.compare(password, user.passwordHash))){
            return res.status(401).json({error: "Invalid Credentials"});
        }
        const token = jwt.sign({id: user._id, username: user.username}, process.env.JWT_SECRET);
        res.json({token});
    }catch (err){
        res.status(500).json({error: 'Login failed'});
    }
});
module.exports = router;