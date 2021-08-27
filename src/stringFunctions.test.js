const {reverseString,stringLength, capitalizeString} = require('./stringFunctions');


test('Get length of the apple word', () => {
  expect(stringLength('apple')).toBe(5);
});

test('Get error on a big word', () => {
  expect(stringLength('apples and more apples')).toEqual("Too big");
});


test('Get length of an empty word', () => {
  expect(stringLength('')).toEqual('Too short');
});

test('Reverse a string', () => {
  expect(reverseString('abc')).toEqual('cba');
});

test('Capitalize a string', () => {
  expect(capitalizeString('apple')).toEqual('Apple');
});
