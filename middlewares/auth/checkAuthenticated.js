require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
    checKAuth : async (req, res, next) => {
        try {
            const token = req.cookies.token;
            if(!token){
                return res.status(401).json({message: 'please login', error: error.message});
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY );
            req.user = {id: decoded.id};
            next();

        } catch (error) {
            res.status(401).json({message: 'please login', error: error.message});
        }
    }
}