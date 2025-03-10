const calculator = require('.')

test('sum calculator', () => {
    const result = calculator.sum(1, 2);
    expect(result).toBe(3);
})

test('subtract calculator', () => {
    const result = calculator.subtract(5, 2);
    expect(result).toBe(3);
})

test.todo('multiply calculator')

test.todo('divide calculator')