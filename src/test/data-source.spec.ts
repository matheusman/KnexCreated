import 'dotenv/config'

describe("criate Bank", () => {
    it("Connectar o dotenv", () => {
        const port = process.env.DB_PORT
        expect(port).toBe("3306")
    })
})