/*
30 Day DSA Challenge from Hello Coders Team

*Day 6:*

Question 11: Simple Calculator

*Task:*
Create a simple calculator that can perform addition, subtraction, multiplication, and division.

1. *Functional Programming Approach:* 
   - Write functions for each operation: add, subtract, multiply, and divide.
   - Implement a function calculate that takes two numbers and an operation (as a string) and returns the result of the operation.
*/

const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

const multiply = (a: number, b: number): number => {
  return a * b;
};

const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
};

const calculate = (a: number, b: number, operation: string): number => {
  switch (operation) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      throw new Error("Invalid operation");
  }
};

console.log(calculate(5, 3, "+")); // Output: 8
console.log(calculate(10, 2, "-")); // Output: 8
console.log(calculate(4, 2, "*")); // Output: 8
console.log(calculate(16, 2, "/")); // Output: 8);

/*
  2. *Object-Oriented Programming (OOP) Approach:*
     - Create a Calculator class with methods for each operation.
     - Implement a method calculate in the class that takes two numbers and an operation (as a string) and returns the result of the operation.
  */
class Calculator {
  constructor() {}

  private methods: { [key: string]: (num1: number, num2: number) => number } = {
    add: this.add,
    subtract: this.subtract,
    multiply: this.multiply,
    divide: this.divide,
  };

  add(num1: number, num2: number): number {
    return num1 + num2;
  }
  subtract(num1: number, num2: number): number {
    return num1 - num2;
  }
  multiply(num1: number, num2: number): number {
    return num1 * num2;
  }
  divide(num1: number, num2: number): number {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
  }
  calculate(num1: number, num2: number, operation: string): number | never {
    return this.methods[operation](num1, num2);
  }
}
// Test the object oriented programming approach:
const calculator = new Calculator();
console.log(calculator.calculate(5, 3, "add")); // Output: 8
console.log(calculator.calculate(5, 3, "subtract")); // Output: 2 console.log(calculator.calculate(5, 3, "multiply")); // Output: 15
console.log(calculator.calculate(10, 2, "divide")); // Output: 5
try {
  console.log(calculator.calculate(5, 0, "divide")); // Output: Error: Cannot divide by zero
} catch (error: any) {
  console.error(error.message);
}
try {
  console.log(calculator.calculate(5, 3, "invalid")); // Output: Error: Invalid operation
} catch (error: any) {
  console.error(error.message);
}

/*
  Question 12: Separate Elements by Type
  
  *Task:*
  Given an array with mixed types of elements, separate them into different arrays based on their type (number, string, boolean).
  */
const separateByType = (array: any): [number[], string[], boolean[]] => {
  let strings: string[] = [];
  let numbers: number[] = [];
  let booleans: boolean[] = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      strings.push(array[i]);
    } else if (typeof array[i] === "number") {
      numbers.push(array[i]);
    } else if (typeof array[i] === "boolean") {
      booleans.push(array[i]);
    } else {
      console.log(`Element at index ${i} is not a string, number, or boolean`);
    }
  }
  return [numbers, strings, booleans];
};

console.log(separateByType([1, "hello", true, 2, "world", false]));
// output: [[1, 2], ["hello", "world"], [true, false]]
