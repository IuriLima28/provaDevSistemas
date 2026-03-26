// tests/profit.test.js
const { calculateNetProfit } = require('./atividade4');
describe('calculateNetProfit', () => {
test('deve calcular corretamente o lucro líquido positivo', () => {
const result = calculateNetProfit(200, 100, 20);
expect(result).toBe(80.00);
});
test('deve retornar prejuízo (valor negativo)', () => {
const result = calculateNetProfit(100, 120, 10);
expect(result).toBe(-30.00);
});
test('deve retornar zero quando não há lucro nem prejuízo', () => {
const result = calculateNetProfit(150, 100, 50);
expect(result).toBe(0.00);
});
test('deve lançar erro para valores negativos', () => {
expect(() => calculateNetProfit(-200, 100, 20)).toThrow();
expect(() => calculateNetProfit(200, -100, 20)).toThrow();
expect(() => calculateNetProfit(200, 100, -20)).toThrow();
});
test('deve lançar erro para valores não numéricos', () => {
expect(() => calculateNetProfit("200", 100, 20)).toThrow();
expect(() => calculateNetProfit(200, "100", 20)).toThrow();
expect(() => calculateNetProfit(200, 100, "20")).toThrow();
});
});