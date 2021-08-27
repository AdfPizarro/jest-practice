const Calculator  = require('./calculator');


let calc=new Calculator()

test('Add two numbers ', () => {
  expect(calc.add(2,5)).toBe(7);
});
