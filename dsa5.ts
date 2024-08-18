/*
Day 5

*Question 1: Array Comparison and Manipulation (Updated)*

Create a function in TypeScript that takes two arrays of numbers as input. The function should perform the following operations based on the conditions given:

1. *If the lengths of both arrays are the same and all elements are the same:*
   - Merge both arrays into one array.
   - Multiply all elements of the merged array to produce a single number.
   - Return the product.

2. *If the lengths of both arrays are different:*
   - Merge both arrays into one array.
   - Return the middle element of the merged array.

3. *If the lengths of both arrays are the same but elements are different:*
   - Make the elements of both arrays the same by adding corresponding elements.
   - Merge the arrays.
   - Return the sum of the elements of the resulting merged array.

*Hints:*
- Use loops to compare elements and calculate new values.
- Avoid using built-in array methods.
- Think about how to find the middle element of an array when lengths are different.

// Example Test Cases
// manipulateArrays([1, 2, 3], [1, 2, 3]) should output 216 (product of [1, 2, 3, 1, 2, 3])
// manipulateArrays([1, 2], [3, 4, 5]) should output 3 (middle element of [1, 2, 3, 4, 5])
// manipulateArrays([1, 2], [3, 4]) should output 6 (sum of [1, 2, 1, 2])
*/

const manipulateArrays = (array1: number[], array2: number[]): number => {
  if (array1.length !== array2.length) {
    const mergedArray = array1.concat(array2);
    const result = mergedArray[Math.floor(mergedArray.length / 2)];
    return result;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      const arr1 = [...array1, ...array2];
      const arr2 = [...array1, ...array2];
      const concatArr = arr1.concat(arr2);
      let result: number = 0;
      for (let i = 0; i < concatArr.length; i++) {
        result += concatArr[i];
      }
      return result;
    }
  }
  const mergedArray = array1.concat(array2);
  let result = 1;
  for (let i = 0; i < mergedArray.length; i++) {
    result *= mergedArray[i];
  }
  return result;
};

console.log(
  "Multiple of equal arrays':",
  manipulateArrays([1, 2, 3], [1, 2, 3])
);
console.log(
  "Middle of unequal length arrays':",
  manipulateArrays([1, 2, 3], [1, 2, 3, 4, 5])
);
console.log(
  "Sum of unequal value arrays':",
  manipulateArrays([1, 2, 3], [4, 5, 6])
);


/*
Question 2: Extract First Letters from String Array*

Create a function in TypeScript that takes an array of strings (names) as input. The function should return a new array containing the first letter of each name.

*Hints:*
- Iterate through each name in the array.
- Extract the first letter of each name without using built-in methods.

*Example:*
typescript
function extractFirstLetters(names: string[]): string[] {
    // Your implementation here
}

// Example Test Case
// extractFirstLetters(["Alice", "Bob", "Charlie", "David", "Eve"]) should output ["A", "B", "C", "D", "E"]
*/

const extractFirstLetters = (array: string[]): string[] => {
  let result: string[] = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i][0];
    result.push(element);
  }
  return result;
};
console.log(
  "First Letter of every String in Array's:",
  extractFirstLetters(["Alice", "Bob", "Charlie", "David", "Eve"])
);
