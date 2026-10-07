const { sum, divide, multiply, getUserInfo, isEven } = require('../src/calculator');

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
    test('isEvent works correctly', () => {
        expect(isEven(0)).toBe(true);
        expect(isEven(1)).toBe(false);
        expect(isEven(2)).toBe(true);
        expect(isEven(3)).toBe(false);
    });
});

describe('User Info', () => {
    test('getUserInfo returns correct object', () => {
        expect(getUserInfo('Alexey', 25)).toEqual({
            name: 'Alexey',
            age: 25,
            isAdult: true
        })
    });

    test('Object contains specified properties', () => {
        const userInfo = getUserInfo('Mary', 16);
        expect(userInfo).toHaveProperty('name');
        expect(userInfo).toHaveProperty('isAdult', false);
    })
});
