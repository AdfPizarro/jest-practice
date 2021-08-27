const Calculator  = require('./calculator');


let calc=new Calculator()


describe('Test the add function', () => {
  test('Add two numbers ', () => {
    expect(calc.add(2,5)).toBe(7);
  });

  test('Add zero to a number ', () => {
    expect(calc.add(2,0)).toBe(2);
  });

  test('Add two zeros ', () => {
    expect(calc.add(0,0)).toBe(0);
  });
});

describe('Test the substract function', () => {
  test('Substract a number ', () => {
    expect(calc.substract(5,2)).toBe(3);
  });

  test('Substract a number bigger than the original', () => {
    expect(calc.substract(2,10)).toBe(-8);
  });

  test('Substract a number to zero ', () => {
    expect(calc.substract(0,10)).toBe(-10);
  });
});

describe('Test the divide function', () => {
  test('Divide a number ', () => {
    expect(calc.divide(10,2)).toBe(5);
  });

  test('Divide a zero', () => {
    expect(calc.divide(10,0)).toBe(Infinity);
  });

  test('Divide by zero ', () => {
    expect(calc.divide(10,0)).toBe(Infinity);
  });
});

describe('Test the multiply function', () => {
  test('Multyply', () => {
    expect(calc.multiply(10,2)).toBe(20);
  });

  test('Multiply by zero', () => {
    expect(calc.multiply(10,0)).toBe(0);
  });

  test('Conmutative property', () => {
    expect(calc.multiply(10,1)).toBe(10);
    expect(calc.multiply(1,10)).toBe(10);
  });
});
