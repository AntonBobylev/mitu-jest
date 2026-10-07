const { sum } = require('../src/calculator');

describe('Sum function', () => {
    test('should sum two numbers: 1 and 2, expects 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});
