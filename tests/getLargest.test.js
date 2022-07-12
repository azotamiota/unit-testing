const each = require('jest-each').default;
const getLargest = require('../getLargest')

describe('getLargest', () => {

    test("It is a function", () => {
        expect(typeof getLargest).toBe('function')
    })
    
    
    describe("It handles normal inputs successfully", () => {

        each([
            [[1,2,3], 3],
            [[9,8,7], 9],
            [[12,36,19], 36]])
        .test("", (arr, expected) => {
            expect(getLargest(...arr)).toEqual(expected)
        })
        // test("", () => {
        //     const result = getLargest(1,2,3);
        //     const result2 = getLargest(-1,-2,-3);
        //     const result3 = getLargest(0.4, 99, 2323);
        //     expect(result).toEqual(3);
        //     expect(result2).toEqual(-1);
        //     expect(result3).toEqual(2323);
        // })
    })
})

