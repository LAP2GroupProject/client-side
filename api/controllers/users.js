
const User = require('../models/users')

//Get all users
async function index (req, res) {
    try {
        const users = await User.all;
        
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({err})
    }
}

// get user by ID
async function show (req, res) {
    try {
        const user = await User.findUserById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({err})
    }
}



module.exports={index, show}
