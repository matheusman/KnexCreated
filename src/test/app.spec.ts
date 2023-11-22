import supertest from "supertest";
import app from '../app';

describe( "started server", () => {
    it("request statusCode 200",  async () => {
        const require = await supertest(app).get('/')
        expect(require.status).toBe(200)
    })
})

