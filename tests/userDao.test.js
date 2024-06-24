const mongoose = require('mongoose');
const userDao = require('../daos/userDao');
const db = require('../dbconfig');

describe('User DAO', () => {
    beforeAll(async () => {
        db();
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('should get list of users', async () => {
        const users = await userDao.getUsers();
        expect(users.length).toBeGreaterThan(0);
    });

    // storing created user id
    let userId;

    it('should create a new user', async () => {
        const userData = {
            email: 'test@example.com',
            password: 'password',
            name: 'Test User',
            age: 25,
            city: 'Test City',
            zipcode: 12345
        };
        const user = await userDao.createUser(userData);
        userId = user._id;
        expect(user).toBeTruthy();
        expect(user.name).toBe(userData.name);
    });

    it('should get a user by ID', async () => {
        const user = await userDao.getUserById(userId);
        expect(user).toBeTruthy();
    });

    it('should update a user', async () => {
        const userData = {
            email: 'test@example.com',
            name: 'Test User',
            age: 25,
            city: 'Test City',
            zipcode: 123456
        };
        const updatedUser = await userDao.updateUser(userId, userData);
        expect(updatedUser).toBeTruthy();
    });

    it('should find a user bt email', async () => {
        const user = await userDao.findOne({email: 'test@example.com'});
        expect(user).toBeTruthy();
    })
});
