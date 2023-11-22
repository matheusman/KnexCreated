import supertest from "supertest";
import app from "../../app";

describe( "Connectando o banco de dados", () => {
    it("Deve listar todos os ususarios", async () => {
        const res = await supertest(app).get('/users')
        expect(res.status).toBe(200)  
        expect(res.body).toBeGreaterThan(0)
    })
})

describe.only("insert User for success", () => {
    it( "Insert user", async () => {
        const mail = `${Date.now()}@mail.com`
        const res = await supertest(app).post('/users')
        .send({ name : 'Vandi', email : mail, pass : '12345'})
        expect(res.status).toBe(201)
    })
   
})