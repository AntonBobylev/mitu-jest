const { sum, divide, multiply, isEven } = require('../src/calculator');

describe('Calculator', () => {
    test('Sum works correctly', () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(1, -2)).toBe(-1);
    });
    test('Multiply works correctly', () => {
        expect(multiply(3, 4)).toBe(12);
        expect(multiply(0, 5)).toBe(0);
    });
    test('Sum works with float values correctly', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });
    test('Division by zero throws an exception', () => {
        expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
    test('Division works correctly', () => {
        expect(divide(0, 10)).toBe(0);
        expect(divide(10, 1)).toBe(10);
        expect(divide(10, 10)).toBe(1);
        expect(divide(10, 100)).toBe(0.1);
    });
    test('isEven works correctly', () => {
        expect(isEven(0)).toBe(true);
        expect(isEven(1)).toBe(false);
        expect(isEven(2)).toBe(true);
        expect(isEven(3)).toBe(false);
    });
});
