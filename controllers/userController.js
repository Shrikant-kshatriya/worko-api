const { getUserById, deleteUser } = require('../daos/userDao');
const { userClientDTO } = require('../dtos/userDto');
const userService = require('../services/userServices');

module.exports = {
    getUsers: async (req, res) => {
        try {
            const userList = await userService.getUsers();
            if(userList.length > 0) {
                const newUserList = userList.filter(user => user.isdeleted == false).map(user => {
                    return new userClientDTO(user);
                });
                return res.status(200).json(newUserList);
            }
            res.status(404).json({message: 'No users found'});
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await userService.getUserById(req.params.id);
            if(user) {
                return res.status(200).json(new userClientDTO(user));
            }
            res.status(404).json({message: 'No user found'});
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },
    createUser: async (req, res) => {
        try {
            // checking if user already exists
            const existingUser = await userService.findOne(req.body);
            if(existingUser) {
                return res.status(409).json({message: 'User already exists'});
            }
            const user = await userService.createUser(req.body);
            if(user) {
                return res.status(201).json(new userClientDTO(user));
            }
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    },
    patchUser: async (req, res) => {
        try {
            const user = await userService.updateUser(req.params.id, req.body);
            if(user) {
                return res.status(200).json(new userClientDTO(user));
            }
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    },
    putUser: async (req, res) => {
        try {
            const user = await userService.updateUser(req.params.id, req.body);
            if(user) {
                return res.status(200).json(new userClientDTO(user));
            }
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = await userService.deleteUser(req.params.id);
            if(user) {
                return res.status(200).json({message: 'User deleted successfully'});
            }
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    }
}