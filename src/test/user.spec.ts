import supertest from "supertest";
import app from "../app";

describe( "Connectando o banco de dados", () => {
    it("Deve listar todos os ususarios", async () => {
        const req = await supertest(app).get('/users')
        expect(req.status).toBe(200)
        expect(req.body).toHaveLength(1)
        expect(req.body[0]).toHaveProperty('name', 'jhon')
    })
})

describe("insert User for success", () => {
    it("Insert user", async () => {
        const res = supertest(app).post('/users')
        const body = { name : "walter"}
        const insert = await res.send(body)
        expect(insert.status).toBe(201);
        expect(insert.body.name).toBe('walter')
    })
})