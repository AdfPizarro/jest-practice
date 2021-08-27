class Calculator {
  constructor() {
  }

  add(num1, num2){
    return num1 + num2;
  }
  substract(num1, num2){
    return num1 +- num2;
  }
  divide(num1, num2){
    return num1 / num2;
  }
  multiply(num1, num2){
    return num1 * num2;
  }
}


module.exports = Calculator;



/*

Task 3
  dESCRIBE FOR METHODS

    Write a simple calculator class or object, which will have 4 methods: add, subtract, divide, and multiply.
    Write at least 3 tests for each of the calculator methods.
    Group tests for each method using describe() method.

Task 4

In this task we're going to do things differently:

    Start by writing a test for a capitalize(string) function. Your test should make sure that this function takes a string as an argument and returns that string with the first character capitalized.
    Run your test - it should fail because you don’t have the capitalize(string) function implemented yet.
    Now make your tests green by implementing the capitalize(string) function. Think about what the minimum amount of code is necessary to pass this test and write it.
*/
