// tests/shipping.test.js
const { calculateShipping } = require('./exercicio-03');
describe('calculateShipping', () => {
test('deve calcular corretamente o frete com peso e distância', () => {
const result = calculateShipping(10, 100);
// (10 * 0.5) + (100 * 0.1) = 5 + 10 = 15
expect(result).toBe(15.00);
});
test('deve calcular corretamente com valores zero', () => {
expect(calculateShipping(0, 100)).toBe(10.00);
expect(calculateShipping(10, 0)).toBe(5.00);
});
test('deve retornar 0 quando peso e distância forem zero', () => {
expect(calculateShipping(0, 0)).toBe(0.00);
});
test('deve lançar erro para valores negativos', () => {
expect(() => calculateShipping(-1, 10)).toThrow();
expect(() => calculateShipping(10, -1)).toThrow();
});
test('deve lançar erro para valores não numéricos', () => {
expect(() => calculateShipping("10", 100)).toThrow();
expect(() => calculateShipping(10, "100")).toThrow();
});
});