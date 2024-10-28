const add = (x, y) => x + y;

test('add takes two n umbers and returns a sum', () => {
        const result = add(1, 2)
        expect(result).toBe(3)
})