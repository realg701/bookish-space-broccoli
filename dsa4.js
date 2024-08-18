// Question 7: Find Duplicate Numbers in an Array
// *Description:*
// Write a TypeScript function that takes an array of numbers as input and returns a new array containing only the duplicate numbers from the original array. If there are no duplicates, return an empty array.
function findDuplicates(numbers) {
    const duplicateArr = [];
    const newArr = [];
    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];
        let isDuplicate = false;
        for (let j = 0; j < newArr.length; j++) {
            if (newArr[j] === currentNumber) {
                isDuplicate = true;
            }
        }
        if (isDuplicate) {
            let isDuplicateAlreadyRecorded = false;
            for (let k = 0; k < duplicateArr.length; k++) {
                if (duplicateArr[k] === currentNumber) {
                    isDuplicateAlreadyRecorded = true;
                }
            }
            if (!isDuplicateAlreadyRecorded) {
                duplicateArr.push(currentNumber);
            }
        }
        else {
            newArr.push(currentNumber);
        }
    }
    return duplicateArr;
}
// Example usage:
const numbers = [1, 2, 3, 2, 4, 5, 5, 6, 3];
const duplicates = findDuplicates(numbers);
console.log(duplicates); // Output: [2, 5]
function printTopStudents(students) {
    students.forEach((student) => {
        if (student.marks > 80) {
            console.log(`Name :${student.name} , Age :${student.age} and Marks :${student.marks}`);
        }
    });
}
const students = [
    { name: "Ali", age: 20, marks: 75 },
    { name: "Sara", age: 22, marks: 85 },
    { name: "John", age: 21, marks: 90 },
];
printTopStudents(students);
export {};
