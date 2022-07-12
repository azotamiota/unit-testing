const getLargest = require('../getLargest')

test("get largest is a function", () => {
    expect(typeof getLargest).toBe('function')
})


test('Return the largest number', () => {
    const result = getLargest(1,2,3);
    expect(result).toEqual(3);
}
)
