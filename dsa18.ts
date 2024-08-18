/*
Day 18

### Question: 1 *Sum of Odd Numbers and Multiplication Table*
Write a function that takes an array of numbers as input. The function should first find the sum of all the odd numbers in the array. Then, it should generate and return an array containing the multiplication table of that sum from 1 to 10.

*Hint:*
1. Use a loop to iterate through the array and sum the odd numbers.
2. Use another loop to create the multiplication table for the sum.

*Function Signature:*
typescript
function oddSumMultiplicationTable(numbers: number[]): number[] {
  // Your code here
}

*Example:*
- Input: [2, 3, 5, 8, 11]
- Output: [19, 38, 57, 76, 95, 114, 133, 152, 171, 190]
  - (Explanation: The odd numbers are 3, 5, and 11. Their sum is 19. The multiplication table of 19 is generated.)

*/

// Task 1: Sum of Odd Numbers and Multiplication Table

const oddSumMultiplicationTable = (number: number[]): string[] => {
  // Find sum of odds
  let odd: number = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 !== 0) {
      odd += number[i];
    }
  }
  // Array of Multiplication table
  const table: string[] = [];
  for (let i = 1; i <= 10; i++) {
    const result: number = i * odd;
    table[i - 1] = `${odd} x ${i} = ${result}`;
  }
  return table;
};
console.log(oddSumMultiplicationTable([1, 2, 3, 4, 5, 6, 7, 8, 9]));
/* output:[
  '25 x 1 = 25',
  '25 x 2 = 50',
  '25 x 3 = 75',
  '25 x 4 = 100',
  '25 x 5 = 125',
  '25 x 6 = 150',
  '25 x 7 = 175',
  '25 x 8 = 200',
  '25 x 9 = 225',
  '25 x 10 = 250'
]*/

/*
### Question: 2 *Filter and Square Even Numbers*
Write a function that takes an array of numbers as input. The function should filter out all the even numbers from the array, square each of those even numbers, and return a new array containing these squared values.

*Hint:*
1. Use a loop or array method to filter out the even numbers.
2. Square each of the filtered numbers and store the results in a new array.

*Function Signature:*
typescript
function squareEvenNumbers(numbers: number[]): number[] {
  // Your code here
}

*Example:*
- Input: [1, 2, 3, 4, 5, 6]
- Output: [4, 16, 36]
  - (Explanation: The even numbers are 2, 4, and 6. Their squares are 4, 16, and 36.)

*/

// Task 2: Filter and Square Even Numbers

const squareEvenNumbers = (numbers: number[]): number[] => {
  const even: number[] = [];
  // for loop to find even numbers
  let j: number = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      // squaring even numbers and push to array
      even[j] = numbers[i] * 2;
      j++;
    }
  }
  // return array of square of even numbers
  return even;
};

console.log(squareEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
