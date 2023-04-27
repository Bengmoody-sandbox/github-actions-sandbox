const {addNumbers, subtractNumbers, multiplyNumbers, divideNumbers, exponentNumbers} = require('../main.js')

describe('addNumbers', () => {
    test('adds two positive numbers correctly', () => {
        // arrange
        const num1 = 17
        const num2 = 25

        // act
        let result = addNumbers(num1,num2)

        // assert
        expect(result).toBe(42) 

    })
    test('adds one neg and one positive numbers correctly', () => {
        // arrange
        const num1 = 17
        const num2 = -25

        // act
        let result = addNumbers(num1,num2)

        // assert
        expect(result).toBe(-8) 
    })
    test('adds two neg neg numbers correctly', () => {
        // arrange
        const num1 = -17
        const num2 = -25

        // act
        let result = addNumbers(num1,num2)

        // assert
        expect(result).toBe(-42) 
    })
});
describe('subtractNumbers',() => {
    test("allows one smaller +ve number to be subtracted from positive number",() => {
        // arrange 
        const num1 = 25
        const num2 = 8

        // act 
        const result = subtractNumbers(num1,num2)

        // assert
        expect(result).toBe(17)
    })
    test("allows bigger 2nd number and +ve small number to produce a negative answer", () => {
        // arrange
        const num1 = 17
        const num2 = 25

        // act 
        const result = subtractNumbers(num1,num2)

        // assert
        expect(result).toBe(-8)
    })
    test("allows two negative numbers, giving +ve answer", () => {
        // arrange
        const num1 = -17
        const num2 = -25

        // act 
        const result = subtractNumbers(num1,num2)

        // assert
        expect(result).toBe(8)
    })
})
describe("multiply numbers",() => {
    test("allows two +ve numbers to multiply to +ve outcome",() => {
        // arrange
        const num1 = 15
        const num2 = 6

        // act
        const result = multiplyNumbers(num1, num2)

        // assert
        expect(result).toBe(90)
    })
    test("allows two -ve numbers to multiply to +ve outcome",() => {
        // arrange
        const num1 = -15
        const num2 = -6

        // act
        const result = multiplyNumbers(num1, num2)

        // assert
        expect(result).toBe(90)
    })
    test("allows one +ve number and 1 -ve number to multiply to -ve outcome",() => {
        // arrange
        const num1 = -15
        const num2 = 6

        // act
        const result = multiplyNumbers(num1, num2)

        // assert
        expect(result).toBe(-90)
    })
})
describe("divide numbers",() => {
    test("two positive numbers, positive answer",() => {
        // arrange
        const num1 = 15
        const num2 = 3

        // act
        const result = divideNumbers(num1, num2)

        // assert
        expect(result).toBe(5)
    })
    test("one positive number, one neg num,  -ve answer",() => {
        // arrange
        const num1 = 15
        const num2 = -3

        // act
        const result = divideNumbers(num1, num2)

        // assert
        expect(result).toBe(-5)
    })
    test("two neg nums,  +ve answer",() => {
        // arrange
        const num1 = -15
        const num2 = -3

        // act
        const result = divideNumbers(num1, num2)

        // assert
        expect(result).toBe(5)
    })
})

describe("exponent numbers", () => {
    test("negative base, +ve even exponent, +ve number ",() => {
        // arrange
        const num1 = -2
        const num2 = 4
        
        // act
        const result = exponentNumbers(num1, num2)

        // assert
        expect(result).toBe(16)
    })
    test("negative base, +ve odd exponent, +ve number ",() => {
        // arrange
        const num1 = -2
        const num2 = 3
        
        // act
        const result = exponentNumbers(num1, num2)

        // assert
        expect(result).toBe(-8)
    })
    test("negative base, -ve integer even exponent, +ve number smaller than original",() => {
        // arrange
        const num1 = -2
        const num2 = -2
        
        // act
        const result = exponentNumbers(num1, num2)

        // assert
        expect(result).toBe(0.25)
        expect(Math.abs(result)).toBeLessThan(Math.abs(num1))
    })
    test("negative base, -ve integer odd exponent, -ve number smaller than original",() => {
        // arrange
        const num1 = -2
        const num2 = -3
        
        // act
        const result = exponentNumbers(num1, num2)

        // assert
        expect(result).toBe(-0.125)
        expect(Math.abs(result)).toBeLessThan(Math.abs(num1))
    })
    
    
})