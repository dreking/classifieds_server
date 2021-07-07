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

test('Should login', async () => {
    await request(app)
        .post('/api/v1/auth/signin')
        .set('content-type', 'application/json')
        .send({ email: 'sellertest@test.com', password: 'sellertest' })
        .expect(200);
});

test('Should expect validations errors', async () => {
    await request(app)
        .post('/api/v1/auth/signin')
        .set('content-type', 'application/json')
        .send({})
        .expect(422);
});
