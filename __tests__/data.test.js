const app = require('../app');
const request = require('supertest');

describe('Validate Data Endpoint', () => {
  it('Should return valid', async () => {
    const { body } = await request(app)
      .post('/api/validate')
      .send({
        data: {
          type: 'durban',
          crux: 'Indices',
          color: 'green',
          title: 'Indict the idiot'
        },
        rules: ['type', 'crux', 'color', 'title']
      });
    expect(body.output).toBe('valid');
  });

  it('Should return valid, with more fields added', async () => {
    const { body } = await request(app)
      .post('/api/validate')
      .send({
        data: {
          type: 'durban',
          crux: 'Indices',
          color: 'green',
          title: 'Indict the idiot',
          digit: '123456',
          isDead: false
        },
        rules: ['type', 'crux', 'color', 'title']
      });
    expect(body.output).toBe('valid');
  });

  it('Should return title as the missing value', async () => {
    const { body } = await request(app)
      .post('/api/validate')
      .send({
        data: {
          type: 'durban',
          crux: 'Indices',
          color: 'green'
        },
        rules: ['type', 'crux', 'color', 'title']
      });
    expect(body.output).toBe('title');
  });

  it('Should output "Object cannot be empty" if data has no values', async () => {
    const { body } = await request(app)
      .post('/api/validate')
      .send({
        data: {},
        rules: ['type', 'crux', 'color', 'title']
      });
    expect(body.output).toBe('Object cannot be empty.');
  });

  it('Should output "Rules cannot be empty" if rules is empty', async () => {
    const { body } = await request(app)
      .post('/api/validate')
      .send({
        data: {
          type: 'durban',
          crux: 'Indices',
          color: 'green',
          title: 'Indict the idiot'
        },
        rules: []
      });
    expect(body.output).toBe('Rules cannot be empty');
  });
});
