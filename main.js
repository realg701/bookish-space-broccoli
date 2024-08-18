// console.log("First");
// await new Promise((resolve) => setTimeout(resolve, 2000));
// console.log("Second");
// console.log("Third");
let fruits = [
    "apple",
    "banana",
    "mango",
    "peach",
    "guava",
    "orange",
];
fruits.splice(2, 3, "avacado", "brutus");
// console.log(fruits.slice(2, 3));
// console.log(fruits);
// console.log(fruits.splice(2, 3, "avacado", "brutus"));
let arrStr = [
    "hello",
    "hello",
    "hello",
    "world",
    "hello",
    "hello",
    "hello",
    "world",
];
// console.log(arrStr.filter((str) => str === "hello"));
const sumArr = (...numbers) => numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log("Sum", sumArr(2, 2, 2));
/* Question 3: Reverse a String
Instructions:

Write a function named reverseString that takes a string as input.
The function should return the reversed version of the input string.
Ensure your function works correctly by testing it with different inputs.
Example:

Input: "hello"
Output: "olleh" */
const reverseString = (myString) => {
    const splitedString = myString.split("");
    const reversedArray = splitedString.reverse();
    const reversedString = reversedArray.join("");
    return reversedString;
};
// console.log(reverseString("hello"));
/*
*2nd Day Task Of 30 Days Challenge From Hello Coders Team*

Question 3:
 First and Last Element
Objective: Write a TypeScript function that takes an array of numbers and returns a new array containing only the first and last elements of the input array.

Requirements:

If the array has only one element, the function should return an array with that element duplicated.
Ensure the function handles arrays with a single element correctly.*/
const myArray = (myNumbers) => {
    if (myNumbers.length <= 1) {
        return [myNumbers[0], myNumbers[0]]; // duplicated element
    }
    else {
        return [myNumbers[0], myNumbers[myNumbers.length - 1]];
    }
};
// console.log(myArray([1, 2, 3]));
/*
Question: 4
Find the Largest Number
Objective: Write a TypeScript function that takes an array of numbers and returns the largest number in the array.

Requirements:

The function should handle arrays with positive and negative numbers.
If the array contains only one number, return that number.
Ensure the function handles an empty array gracefully (you might decide to return undefined or throw an error based on your needs).
Note:
This solution avoids using built-in methods like Math.max and demonstrates basic iteration and comparison logic.
*/
const getLargestNumber = (myNumbers) => {
    if (myNumbers.length <= 1) {
        return myNumbers;
    }
    else {
        let largest = 0;
        for (let i = 0; i < myNumbers.length; i++) {
            if (myNumbers[i] > largest) {
                largest = myNumbers[i];
            }
        }
        return [largest];
    }
};
// console.log(getLargestNumber([1, 2, 16, 6, 5]));
function largestElement(arr) {
    return arr.reduce((largest, current) => (current > largest ? current : largest), arr[0]);
}
let num1 = [10, 15, 38, 20, 13];
// console.log(largestElement(num1));
/*
Day 3 Tasks
Welcome to Day 3 of the 30-day DSA challenge by Hello Coders! Today,
we have two interesting tasks for you to enhance your TypeScript skills.
Remember, *do not use built-in methods* to solve these problems.
Let's dive in!

Question 5:
Remove Duplicates from Array
Write a TypeScript function named removeDuplicates
that takes an array of numbers and returns a new array
with all duplicate elements removed.

Requirements:
- The function should iterate through the array and check for duplicates manually.
- You can use additional arrays or variables to keep track of seen elements.
- Do not use any built-in methods like filter(), reduce(), or Set().
*/
// Tasks 1: Remove Duplicates from Array
const removeDuplicates = (myArray) => {
    let unique = [];
    for (let i = 0; i < myArray.length; i++) {
        if (unique.indexOf(myArray[i]) === -1) {
            unique.push(myArray[i]);
        }
    }
    return unique;
};
// let numsArr: number[] = [1, 2, 2, 3, 4, 3, 5, 4, 6, 5];
// console.log(removeDuplicates(numsArr));
// result = [ 1, 2, 3, 4, 5, 6 ]
/*
Question 6:
 Find the Second Largest Number in an Array
Write a TypeScript function named findSecondLargest that takes an array of numbers and returns the second largest number in the array. *Do not use built-in methods* like sort.

Requirements:
- The function should manually find the largest and second largest numbers by iterating through the array.
- You can use additional variables to keep track of the largest and second largest numbers.
- Do not use any built-in methods like sort.
*/
const bubbleSort = (array) => {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }
    return array;
};
const findSecondLargest = (myNumbers) => {
    const sortedArray = bubbleSort(myNumbers);
    if (myNumbers.length <= 2) {
        return myNumbers;
    }
    else {
        let largest = 0;
        let secondLargest = 0;
        for (let i = 0; i < sortedArray.length; i++) {
            if (sortedArray[i] > largest) {
                secondLargest = largest;
                largest = sortedArray[i];
            }
        }
        return [secondLargest, largest];
    }
};
let numsArr = [1, 2, 16, 6, 5, 32];
console.log(findSecondLargest(numsArr));
/*
Question 7: Find Duplicate Numbers in an Array
*Description:*
Write a TypeScript function that takes an array of numbers as input and returns a new array containing only the duplicate numbers from the original array. If there are no duplicates, return an empty array.

*Example:*

// Input
const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

// Output
const duplicates = findDuplicates(numbers);
console.log(duplicates); // [2, 5]

*Hints:*

1. Create an empty array to store the result.
2. Use a nested loop to compare each element with every other element.
3. If a duplicate is found, add it to the result array if it is not already included.
*/
const findDuplicates = (numbers) => {
    if (numbers.length < 3) {
        console.log("Enter at least 3 elements");
    }
    let duplicateNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                if (!duplicateNumbers.includes(numbers[i])) {
                    duplicateNumbers.push(numbers[i]);
                }
                else {
                    return (duplicateNumbers = []);
                }
            }
        }
    }
    return duplicateNumbers;
};
const numbersDup = [1, 2, 32, 2, 4, 5, 4, 5, 32];
// console.log(findDuplicates(numbersDup));
const numbers = [1, 2, 3, 4, 5];
// console.log(findDuplicates(numbers));
const numbersNon = [];
const printTopStudents = (students) => {
    for (let i = 0; i < students.length; i++) {
        if (students[i].marks >= 80) {
            console.log(`${students[i].name +
                " - Age:" +
                students[i].age +
                ", Marks:" +
                students[i].marks}`);
        }
    }
};
const students = [
    { name: "Absar Siddiqui", age: 22, marks: 70 },
    { name: "Ahtesham Siddiqui", age: 24, marks: 80 },
    { name: "Anzar Siddiqui", age: 18, marks: 90 },
    { name: "Abdul Haseeb", age: 54, marks: 30 },
];
printTopStudents(students);
export {};
