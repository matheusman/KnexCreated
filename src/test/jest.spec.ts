describe( "test", () => {
    it("test", () => {
        let number : number | null = null
        expect(number).toBeNull()
        number = 10;
        expect(number).not.toBeNull()
        expect(number).toBe(10)
        expect(number).toEqual(10);
    })
})
