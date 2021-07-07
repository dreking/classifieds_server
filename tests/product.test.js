require('dotenv').config();
const request = require('supertest');
const app = require('../app');

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
