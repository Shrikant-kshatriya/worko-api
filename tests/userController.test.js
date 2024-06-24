const request = require('supertest');
const app = require('../index'); 
const db = require('../dbconfig');
const mongoose = require('mongoose');
const { afterEach } = require('node:test');


jest.mock('../middlewares/validators/checkValidation', () => ({
    checkValidID: jest.fn((req, res, next) => {
        next(); 
    }),
    checkValidation: jest.fn((req, res, next) => {
        next();
    }),
    checkValidUser: jest.fn((req, res, next) => {
        next();
    })
}));

jest.mock('../middlewares/auth/checkAuthenticated', () => ({
    checKAuth: jest.fn((req, res, next) => {
        next();
    })
}));


describe('User Controller', () => {
    beforeEach(async () => {
        db();
    });
    
    afterEach(async () => {
        await mongoose.connection.close();
    });


    let userID;
    it('should create a new user', async () => {
        const response = await request(app)
            .post('/worko/user')
            .send({
                email: 'testUser@example.com',
                password: 'testPassword',
                name: 'Test User',
                age: 25,
                city: 'Test City',
                zipcode: 12345
            });
        userID = response.body.id;
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('should get a user by ID', async () => {
        const response = await request(app)
            .get(`/worko/user/${userID}`)
            .set('cookie', 'token=mockToken');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id', userID);
    });

    it('should update a user', async () => {
        const response = await request(app)
           .put(`/worko/user/${userID}`)
           .set('cookie', 'token=mockToken')
           .send({
                email: 'testUser@example.com',
                name: 'Test User Controller',
                age: 25,
                city: 'Test City',
                zipcode: 12345
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id', userID);
    });
    
    
    it('should patch a user', async () => {
        const response = await request(app)
           .patch(`/worko/user/${userID}`)
           .set('cookie', 'token=mockToken')
           .send({
                email: 'testUser@example.com',
                name: 'Test User Controller',
                age: 25,
                city: 'Test City',
                zipcode: 123456
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id', userID);
    });

    it('should delete a user', async () => {
        const response = await request(app)
           .delete(`/worko/user/${userID}`)
           .set('cookie', 'token=mockToken');
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject({message: 'User deleted successfully'});
    });

    it('should get all users', async () => {
        const response = await request(app)
           .get('/worko/user');
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});
