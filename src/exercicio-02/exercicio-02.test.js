const { calculateDiscount } = require('./exercicio-02');
describe('calculateDiscount', () => {
test('não deve aplicar desconto para valores até 100', () => {
expect(calculateDiscount(100)).toBe(100.00);
expect(calculateDiscount(50)).toBe(50.00);
});
test('deve aplicar 10% de desconto para valores entre 100 e 500', () => {
expect(calculateDiscount(200)).toBe(180.00);
expect(calculateDiscount(500)).toBe(450.00);
});
test('deve aplicar 20% de desconto para valores acima de 500', () => {
expect(calculateDiscount(600)).toBe(480.00);
});
test('deve lançar erro para valores negativos', () => {
expect(() => calculateDiscount(-10)).toThrow();
});
test('deve lançar erro para valores não numéricos', () => {
expect(() => calculateDiscount("200")).toThrow();
});
});