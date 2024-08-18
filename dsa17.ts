/*
Day 17
### Question 1: *Calculate the Product of Odd Numbers*
Write a function productOfOdds(numbers: number[]): number that takes an array of numbers as input. The function should calculate the product of all odd numbers in the array and return the result. If there are no odd numbers, return 1.

*Hint:* Traverse through the array, multiply the odd numbers, and handle the case where no odd numbers are present.

*Example:*
typescript
console.log(productOfOdds([2, 3, 5, 6])); // Output: 15
console.log(productOfOdds([2, 4, 6, 8])); // Output: 1
*/

// Task 1: Calculate the Product of Odd Numbers

const productOfOdds = (numbers: number[]): number => {
  let odds: number = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      odds *= numbers[i];
    }
  }
  return odds;
};

// console.log(productOfOdds([1, 3, 5, 7, 9])); // output: 945
// console.log(productOfOdds([2, 4, 6, 8])); // output: 1

/*
### Question 2: *Find the Longest Word in a Sentence*
Write a function findLongestWord(sentence: string): string that takes a string sentence as input. The function should return the longest word in the sentence. If there are multiple words with the same length, return the first one.

*Hint:* Split the sentence into words, compare their lengths, and return the longest one.

*Example:*
typescript
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
console.log(findLongestWord("I love coding in TypeScript")); // Output: "TypeScript"
*/

// Task 2: Find the Longest Word in a Sentence

function findLongestWord(sentence: string): string {
  const words: string[] = [];
  let currentWord: string = "";

  //   Traverse the sentence to extract words
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      // When a space is encountered, push the current word and reset it
      if (currentWord.length > 0) {
        words.push(currentWord);
        currentWord = "";
      }
    } else {
      // Append characters to the current word
      currentWord += sentence[i];
    }
  }

  //   Push the last word if any
  if (currentWord.length > 0) {
    words.push(currentWord);
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (words[i].length < words[j].length) {
        currentWord = words[j];
      }
    }
  }
  return currentWord;
}

console.log(findLongestWord("I have these thoughts so often I ought"));
console.log(findLongestWord("To replace that slot with what I once bought"));
// console.log(findLongestWord("'Cause somebody stole my car radio"));
// console.log(findLongestWord("And now I just sit in silence"));
