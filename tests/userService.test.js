const userService = require('../services/userServices');
const userDao = require('../daos/userDao');

jest.mock('../daos/userDao');

describe('User Service', () => {
    let userID;
    const userData = {
        id: 'mockUserId', 
        email: 'testService@example.com',
        password: 'testService',
        name: 'Test User',
        age: 25,
        city: 'Test City',
        zipcode: 123456
    };

    it('should create a new user', async () => {
        userDao.createUser.mockResolvedValue(userData);
        const user = await userService.createUser(userData);
        userID = user.id;
        expect(user).toMatchObject(userData);
    });

    it('should get a user by ID', async () => {
        userDao.getUserById.mockResolvedValue(userData); 
        const user = await userService.getUserById(userID);
        expect(user).toMatchObject(userData); 
    });

    it('should update a user', async () => {
        const updatedUserData = { ...userData, name: 'Updated Test User' };
        userDao.updateUser.mockResolvedValue(updatedUserData); 
        const user = await userService.updateUser(userID, updatedUserData);
        expect(user).toMatchObject(updatedUserData); 
    });

    it('should delete a user', async () => {
        const deletedUserData = { ...userData, isdeleted: true };
        userDao.updateUser.mockResolvedValue(deletedUserData); 
        const user = await userService.deleteUser(userID);
        expect(user).toMatchObject(deletedUserData); 
    });

    it('should get all users', async () => {
        userDao.getUsers.mockResolvedValue([userData]); 
        const users = await userService.getUsers();
        expect(users).toEqual(expect.arrayContaining([userData])); 
    });

    it('should find user by email', async () => {
        userDao.findOne.mockResolvedValue(userData); 
        const user = await userService.findOne({ email: 'testService@example.com' });
        expect(user).toMatchObject(userData); 
    });
});
