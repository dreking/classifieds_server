require('dotenv').config();
const request = require('supertest');
const app = require('../app');

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
