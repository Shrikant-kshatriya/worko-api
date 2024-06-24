require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userService = require('../services/userServices');

module.exports = {
    loginCotroller: async (req, res) => {
        try {
            // checking if the user exists 
            const user = await userService.findOne({ email: req.body.email });
            if (!user) {
                return res.status(404).json({
                    message: 'user not found, please register'
                });
            }
            // checking if the password is correct
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if(isMatch) {
                // creating a token
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
                return res.cookie('token', token).status(200).json({
                    message: 'login successful'
                });
            }
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
}