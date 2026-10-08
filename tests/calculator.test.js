const { sum, divide, multiply, isEven } = require('../src/calculator');

describe('sum', () => {
    test('sum: возвращает корректную сумму двух чисел', () => {
        // toBe – проверяет строгое равенство значений
        expect(sum(1, 2)).toBe(3);
        // toBeCloseTo – проверяет приближенное равенство чисел с плавающей точкой
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('sum: корректно работает с отрицательными числами', () => {
        // toBe – проверяет строгое равенство значений
        expect(sum(1, -2)).toBe(-1);
    });
});

describe('multiply', () => {
    test('multiply: возвращает корректное произведение', () => {
        // toBe – проверяет строгое равенство значений
        expect(multiply(3, 4)).toBe(12);
    });

    test('multiply: возвращает 0 при умножении на 0', () => {
        // toBe – проверяет строгое равенство значений
        expect(multiply(0, 5)).toBe(0);
    });
});

describe('divide', () => {
    test('divide: возвращает корректный результат деления', () => {
        // toBe – проверяет строгое равенство значений
        expect(divide(0, 10)).toBe(0);
        // toBe – проверяет строгое равенство значений
        expect(divide(10, 1)).toBe(10);
        // toBe – проверяет строгое равенство значений
        expect(divide(10, 10)).toBe(1);
        // toBe – проверяет строгое равенство значений
        expect(divide(10, 100)).toBe(0.1);
    });

    test('divide: выбрасывает ошибку при делении на 0', () => {
        // toThrow – проверяет, что при вызове функции выбрасывается исключение
        expect(() => divide(10, 0)).toThrow('Деление на ноль невозможно');
    });
});

describe('isEven', () => {
    test('isEven: возвращает true для чётных чисел', () => {
        // toBe – проверяет строгое равенство значений
        expect(isEven(0)).toBe(true);
        // toBe – проверяет строгое равенство значений
        expect(isEven(2)).toBe(true);
    });

    test('isEven: возвращает false для нечётных чисел', () => {
        // toBe – проверяет строгое равенство значений
        expect(isEven(1)).toBe(false);
        // toBe – проверяет строгое равенство значений
        expect(isEven(3)).toBe(false);
    });
});
