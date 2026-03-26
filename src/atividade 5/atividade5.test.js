// tests/roi.test.js
const { calculateROI } = require('./atividade5');
describe('calculateROI', () => {
test('deve calcular ROI positivo corretamente', () => {
const result = calculateROI(100, 150);
expect(result).toBe(50.00); // 50%
});
test('deve calcular ROI negativo (prejuízo)', () => {
const result = calculateROI(100, 80);
expect(result).toBe(-20.00); // -20%
});
test('deve retornar 0 quando não há lucro', () => {
const result = calculateROI(100, 100);
expect(result).toBe(0.00);
});
test('deve lançar erro quando investimento for zero', () => {
expect(() => calculateROI(0, 100)).toThrow();
});
test('deve lançar erro para valores negativos ou inválidos', () => {
expect(() => calculateROI(-100, 150)).toThrow();
expect(() => calculateROI(100, -150)).toThrow();
expect(() => calculateROI("100", 150)).toThrow();
});
});