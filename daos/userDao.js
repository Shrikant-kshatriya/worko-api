const User = require('../models/userModel');

module.exports = {
    createUser: async (userData) => {
        try {
            const newUser = new User(userData);
            return await newUser.save();
        } catch (error) {
            throw error;
        }
    },
    getUsers: async () => {
        try {
            return await User.find({});
        } catch (error) {
            throw error;
        }
    },
    getUserById: async (userID) => {
        try {
            return await User.findById(userID);
        } catch (error) {
            throw error;
        }
    },
    updateUser: async (userID, userData) => {
        try {
            return await User.findByIdAndUpdate(userID, userData);
        } catch (error) {
            throw error;
        }
    },
    findOne: async (userData) => {
        try {
            return await User.findOne({email: userData.email});
        } catch (error) {
            throw error;
        }
    }
}