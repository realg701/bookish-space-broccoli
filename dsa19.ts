/*
Day 19

### Question 1: Find the Maximum Difference
*Problem Statement:*
Given an array of integers, find the maximum difference between any two elements in the array. The difference should be calculated as difference = arr[j] - arr[i] where j > i.
*Hint:*  
Iterate through the array, keeping track of the minimum value encountered so far. Calculate the difference between the current element and the minimum value and update the maximum difference accordingly.

*Example:*
typescript
Input: [2, 7, 9, 5, 1, 3, 5]
Output: 7
Explanation: The maximum difference is between 9 and 2, where 9 - 2 = 7.
*/

// Task 1: Find the Maximum Difference

const array: number[] = [2, 7, 5, 9, 1, 3, 5];
// difference variable assigned
let difference: number = array[1] - array[0];
// nested loop iterate j through i
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    // array j - i is greater than value of difference
    if (array[j] - array[i] > difference) {
      // storing the result
      difference = array[j] - array[i];
    }
  }
}

console.log("output: " + difference);

/*
### Question 2: String Character Frequency
*Problem Statement:*
Write a function that takes a string as input and returns an object where the keys are characters and the values are the frequency of those characters in the string.
*Hint:*  
Use an object to store the frequency of each character. Iterate over the string and update the count for each character

*Example:*
typescript
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }
*/

// Task 2: String Character Frequency

interface Object {
  [index: string]: number;
}

const characterFrequency = (string: string): Object => {
  // assigned empty object with index as string
  let object: Object = {};
  // loop througheach character of string
  for (let i = 1; i < string.length; i++) {
    // check for repeated characters
    if (object[string[i]] === undefined) {
      object[string[i]] = 1;
    } else {
      // repated character adds +1
      object[string[i]]++;
    }
  }
  return object;
};

let str: string = "Now the night is coming to an end";

console.log(characterFrequency(str));
