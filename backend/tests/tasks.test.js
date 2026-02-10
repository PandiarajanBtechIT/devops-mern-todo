const request = require('supertest');
const { server, app }  = require('../index');
const moongoose = require('mongoose');


describe('Tasks API', () => {
    it("should create a new task", async () => {
        const res = await request(app).get('/api/tasks')
        expect(res.statusCode).toEqual(200);
    })
})

afterAll( async() => {
    await moongoose.connection.close();
    await server.close();
});