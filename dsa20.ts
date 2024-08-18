/*
Day 20
### Question 1: Check for Prime Number
*Problem:*  
Write a TypeScript function that takes a positive integer as input and checks whether it is a prime number. A prime number is a number greater than 1 that has no divisors other than 1 and itself. If the number is prime, return true; otherwise, return false.

*Hint:*  
- Use a loop to check divisibility from 2 up to the square root of the number.
- If the number is divisible by any of these, it is not prime.

typescript
function isPrime(num: number): boolean {
    // Your code here
}
*/
// Task 1: Check for Prime Number

const squareRoot = (number: number): number => {
  // while loop to calculate square root
  let guess = number;
  while (guess - number / guess > 0.000001) {
    guess = (guess + number / guess) / 2;
  }
  return guess;
};

const isPrime = (number: number): boolean => {
  if (number <= 1) return false;

  for (let i = 2; i <= squareRoot(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
};
// console.log(isPrime(1)); // false
// console.log(isPrime(2)); // true
// console.log(isPrime(3)); // true
// console.log(isPrime(5)); // true
// console.log(isPrime(7)); // true
// console.log(isPrime(9)); // false

/*
### Question 2: Reverse a Number
*Problem:*  
Write a TypeScript function that takes a number as input and returns the number with its digits reversed. For example, if the input is 1234, the output should be 4321.

*Hint:*  
- Convert the number to a string, reverse the string, and then convert it back to a number.

typescript
function reverseNumber(num: number): number {
    // Your code here
}
*/

// Task 2: Reverse a Number

const reverseNumber = (number: number): number => {
  let str: string = number.toString();
  let reversed: string = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return +reversed;
};

let number: number = 1234;
console.log("Reversed of", number, "is", reverseNumber(number));

