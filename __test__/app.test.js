const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('responds with json containing a list of users', async () => {
    const response = await request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);

    const user = response.body[0];
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user.id).toBe(1);
    expect(user.name).toBe('John');
  });
});
