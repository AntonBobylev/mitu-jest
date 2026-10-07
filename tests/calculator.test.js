const { sum, divide, multiply, getUserInfo} = require('../src/calculator');

describe('Calculator', () => {
    test('Should sum two numbers: 1 and 2, expects 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    test('Multiply works correctly', () => {
        expect(multiply(3, 4)).toBe(12);
        expect(multiply(0, 5)).toBe(0);
    });
    test('Work with float values', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });
    test('Division by zero throws an exception', () => {
        expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
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
