/*
Day 21*

### Question 1: Sum of Digits
**Problem:**
Write a function `sumOfDigits` that takes a number as input and returns the sum of its digits.

**Hint:**
You can convert the number to a string, split it into individual digits, and then sum them up.

**Example:**
```typescript
sumOfDigits(123); // Output: 6 (1 + 2 + 3)
sumOfDigits(4567); // Output: 22 (4 + 5 + 6 + 7)
*/
// Task 1: Sum of Digits
const sumOfDigits = (number) => {
    // converting the number to a string
    const numStr = number.toString();
    let result = 0;
    for (let i = 0; i < numStr.length; i++) {
        result += +numStr[i];
    }
    return result;
};
let number = 12345;
console.log("The sum of", number, "is", sumOfDigits(number)); // output: The sum of 12345 is 15
/*
### Question 2: Count Consonants in a String
**Problem:**
Write a function `countConsonants` that takes a string as input and returns the number of consonants in the string. Consonants are all alphabetical characters except `a, e, i, o, u` (both lowercase and uppercase).
**Hint:**
Loop through the string and check each character to see if it is a consonant by excluding vowels.

**Example:**
```typescript
countConsonants("hello"); // Output: 3
countConsonants("TypeScript"); // Output: 7
```

*/
// Task 2: Count Consonants in a String
const countConsonants = (string) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i].includes("bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ")) {
            count++;
            console.log(count++);
        }
    }
    return count;
};
console.log(countConsonants("abcdefghijklmnopqrstuvwxyz"));
export {};
