require('dotenv').config();
const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

beforeAll(() => {
    mongoose.set('useNewUrlParser', true);
    mongoose.connect(process.env.MONGODB_URI);
});

afterAll(async () => {
    await mongoose.connection.close();
});

test('Should get all products', async () => {
    await request(app)
        .get('/api/v1/public/products')
        .set('content-type', 'application/json')
        .expect(200);
});

test('Should get all categories', async () => {
    await request(app)
        .get('/api/v1/public/categories')
        .set('content-type', 'application/json')
        .expect(200);
});
