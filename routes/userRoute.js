const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser, patchUser, putUser, deleteUser } = require('../controllers/userController');
const { checkValidUser, checkValidID, checkValidation } = require('../middlewares/validators/checkValidation');
const {checKAuth} = require('../middlewares/auth/checkAuthenticated');

router
// get list of user
.get('/', getUsers)
// get user details
.get('/:id', checKAuth,checkValidID, getUserById)
// create user
.post('/', checkValidUser, createUser)
// update user
.put('/:id', checKAuth, checkValidation, putUser)
// patch user
.patch('/:id', checKAuth, checkValidation, patchUser)
// delete user
.delete('/:id', checKAuth, checkValidID, deleteUser)


module.exports = router;