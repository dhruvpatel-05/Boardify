const User = require('../models/User.js');
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
    try {
        const {username, email, password} = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists"});
        }

        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error registering user" });
    }
}

exports.loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        const user = await User.findOne({ email });
        console.log(user);
        if(!user || !(await user.comparePassword(password))){
            console.log("comparePassword: " + await user.comparePassword(password));
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET);
        console.log(user.username);
        res.json({ 
            token,
            username: user.username
         });
    } catch(error){
        res.status(500).json({ message: "Error logging user in" });
    }
}

exports.getUserId = async (req, res) => {
    try {
        const username = req.headers['authorization']?.split(' ')[1];
        
        const user = await User.findOne({ username });
        console.log(user);
        if(!user){
            return res.status(400).json({ message: "User not found" });
        }
        const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET);
        res.json({ token });
    } catch(error){
        res.status(500).json({ message: "Error retrieving user" });
    }
};

exports.protectedRoute = (req, res) => {
    res.json({ message: "Access Granted", userID: req.user.userID });
}

// Front-end does headers: { Authorization: `Bearer ${token}` }
exports.authenticateUser = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: "Access Denied" });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403). json({ message: "Invalid Token" });

        req.user = decoded;
        next();
    })
}