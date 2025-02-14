/* Day 12

### Question 1: Remove Duplicates from Sorted Array
*Problem:*
You are given a sorted array that may contain duplicate elements. Your task is to remove the duplicates in-place (without creating a new array) and return the length of the resulting array. The array should be compressed so that the unique elements are placed first.

*Example:*
typescript
Input: [1, 1, 2, 2, 3, 4, 4, 5]
Output: 5
Explanation: The resulting array is [1, 2, 3, 4, 5] and its length is 5.


*Note:*
* Only return the length of the unique elements.
* Duplicate elements should be ignored.
*/

const removeDuplicate = (array: Array<number>): Array<number> => {
  let j = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[j]) {
      array.splice(j, 1);
      j++;
    }
  }
  return array;
};

let array: Array<number> = [1, 1, 2, 2, 3, 4, 4, 5];

let result = removeDuplicate(array);
console.log(result); // output: [ 1, 2, 3, 4, 5 ]
console.log("Array's length:", result.length); // output: 5

/*
### Question 2: Move Zeroes
*Problem:*
You are given an array that contains some zero elements. Your task is to move all the zeroes to the end of the array, while keeping the relative order of the non-zero elements unchanged.

*Example:*
typescript
Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]


*Note:*
* You must modify the array in-place.
* The relative order of the non-zero elements should remain the same.*/

const moveZeros = (array: Array<number>): Array<number> => {
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      array[j] = array[i];
      j++;
    }
  }

  for (let i = j; i < array.length; i++) {
    array[i] = 0;
  }
  return array;
};

array = [0, 1, 0, 3, 12];

let resultB = moveZeros(array);
console.log(resultB); // output: [ 1, 3, 12, 0, 0 ]
