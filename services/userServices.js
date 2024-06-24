const userDao = require('../daos/userDao');
const {userDTO, userUpdateDTO } = require('../dtos/userDto');

module.exports = {
    getUsers : async () => {
        try {
            return await userDao.getUsers();
        } catch (error) {
            throw error;
        }
    },
    getUserById : async (id) => {
        try {
            return await userDao.getUserById(id);
        } catch (error) {
            throw error;
        }
    },
    createUser : async (user) => {
        try {
            const newUser = new userDTO(user);
            return await userDao.createUser(newUser);
        } catch (error) {
            throw error;
        }
    },
    updateUser : async (id, user) => {
        try {
            const updatedUser = new userUpdateDTO(user);
            return await userDao.updateUser(id, updatedUser);
        } catch (error) {
            throw error;
        }
    },
    deleteUser : async (id) => {  // soft delete the user from the database by marking it as deleted
        try {
            return await userDao.updateUser(id, {isdeleted: true});
        } catch (error) {
            throw error;
        }
    },
    findOne : async (user) => {
        try {
            return await userDao.findOne({email: user.email});
        } catch (error) {
            throw error;
        }
    }
}