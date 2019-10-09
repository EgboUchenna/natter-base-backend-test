const app = require('../app');
const request = require('supertest');

describe('Remove Item Endpoint', () => {
  it('Should output object without the deleted item', async () => {
    const { body } = await request(app)
      .delete('/api/remove/type')
      .send({
        data: {
          type: 'durban',
          crux: 'Indices',
          color: 'green',
          title: 'Indict the idiot'
        }
      });
    expect(body.output).toEqual({
      color: 'green',
      crux: 'Indices',
      title: 'Indict the idiot'
    });
  });

  it('Should output object without the title item', async () => {
    const { body } = await request(app)
      .delete('/api/remove/title')
      .send({
        data: {
          type: 'durban',
          crux: 'Indices',
          color: 'green',
          title: 'Indict the idiot'
        }
      });
    expect(body.output).toEqual({
      type: 'durban',
      color: 'green',
      crux: 'Indices'
    });
  });

  it('Should output "attribute not found" if the item does not exist', async () => {
    const { body } = await request(app)
      .delete('/api/remove/tit')
      .send({
        data: {
          type: 'durban',
          crux: 'Indices',
          color: 'green',
          title: 'Indict the idiot'
        }
      });
    expect(body.output).toBe('attribute not found');
  });

  it('Should output "Object cannot be empty" if data has no values', async () => {
    const { body } = await request(app)
      .delete('/api/remove/tit')
      .send({
        data: {}
      });
    expect(body.output).toBe('Object cannot be empty.');
  });

  it('Should output "attribute not found" if wrong input', async () => {
    const { body } = await request(app)
      .delete('/api/remove/imbaskjsahakdkjadnk')
      .send({
        data: {
          type: 'durban',
          crux: 'Indices',
          color: 'green',
          title: 'Indict the idiot'
        }
      });
    expect(body.output).toBe('attribute not found');
  });
});
