const { somar, subtrair, multiplicar, dividir } = require('./calculadora');

test('soma corretamente', () => {
  expect(somar(2, 3)).toBe(5);
});

test('subtrai corretamente', () => {
  expect(subtrair(5, 3)).toBe(2);
});

test('multiplica corretamente', () => {
  expect(multiplicar(2, 3)).toBe(6);
});

test('divide corretamente', () => {
  expect(dividir(6, 3)).toBe(2);
});

test('erro ao dividir por zero', () => {
  expect(() => dividir(5, 0)).toThrow();
});
