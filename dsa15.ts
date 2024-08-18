/*
Day 15

### Question 1: Anagrams

*Problem:*
Write a TypeScript function areAnagrams(str1: string, str2: string): boolean that checks if two strings are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another word or phrase using all the original letters exactly once.

*Hints:*

1. *Normalize Case:*
   - Convert both strings to lowercase to ensure that the comparison is case-insensitive.
   - Traverse each character of the strings and convert uppercase characters to lowercase.

2. *Count Characters:*
   - Use a fixed-size data structure like an array to count the occurrences of each character in both strings. Since we're only dealing with lowercase letters, an array of size 26 (for 'a' to 'z') will suffice.
   - Initialize two arrays (or two objects with 26 keys) to keep track of character frequencies for each string.

3. *Compare Character Counts:*
   - After populating the frequency arrays for both strings, compare them to determine if they are identical.
   - If they match, then the two strings are anagrams; otherwise, they are not.

4. *Edge Cases:*
   - Check if the strings have different lengths initially. If they do, they cannot be anagrams.
   - Handle empty strings as valid anagrams of each other.
*/

// Task 1: Anagrams

const areAnagrams = (str1: string, str2: string): boolean => {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) return false;
  if (str1.length === 0 && str2.length === 0) return true;

  let charCount: Array<number> = new Array(26).fill(0);

  for (let i = 0; i < str1.length; i++) {
    charCount[str1.charCodeAt(i) - "a".charCodeAt(0)]++;
    charCount[str2.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  for (let i = 0; i < 26; i++) {
    if (charCount[str1.charCodeAt(i)] !== charCount[str2.charCodeAt(i)]) {
      return false;
    }
  }

  return charCount.every((count) => count === 0);
};

console.log(areAnagrams("ride", "dire"));
console.log(areAnagrams("blurryface", "Heavydirtysoul"));

/*
### Question 2: Reverse Words in a Sentence

*Problem:*
Write a TypeScript function reverseWords(sentence: string): string that reverses the words in a given sentence. For example, if the input is "Hello world", the output should be "world Hello".

*Hints:*

1. *Identify Word Boundaries:*
   - Traverse the sentence character by character.
   - Detect the start and end of each word by identifying spaces or the start/end of the string.

2. *Extract Words:*
   - Use indices to keep track of where each word starts and ends.
   - Build an array of words from these indices by manually copying characters into new strings.

3. *Reverse the Order of Words:*
   - After extracting the words, create a new array to hold them in reverse order.
   - Iterate through the original array of words from the end to the beginning and insert them into the new array.

4. *Reconstruct the Sentence:*
   - Concatenate the reversed array of words into a single string, ensuring that words are separated by spaces.

5. *Edge Cases:*
   - Handle multiple spaces between words by treating consecutive spaces as single separators.
   - Consider sentences with leading, trailing, or multiple spaces.
*/

// Task 2: Reverse Words in a Sentence

// const reverseWords = (sentence: string): string[] => {
//   const words: string[] = [];
//   let currentWord: string = "";

//   for (let i = 0; i < sentence.length; i++) {
//     // First word
//     if (sentence[i] !== " ") {
//       if (sentence[i] === " ") {
//         words.push(currentWord);
//         currentWord = "";
//       }
//     } else {
//       currentWord += sentence[i];
//     }
//   }

//   const reverseWords: any = [];
//   for (let i = words.length - 1; i >= 0; i--) {
//     reverseWords.push(words[i]);
//   }
//   return words;
// };

// Task 2: Reverse Words in a Sentence

function reverseWords(sentence: string): string {
  const words: string[] = [];
  let currentWord: string = "";

  // Traverse the sentence to extract words
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

  // Push the last word if any
  if (currentWord.length > 0) {
    words.push(currentWord);
  }

  // Reverse the array of words
  words.reverse();

  // Join the words to form the reversed sentence
  return words.join(" ");
}

console.log(reverseWords("I have these thoughts so often I ought"));
console.log(reverseWords("To replace that slot with what I once bought"));
// console.log(reverseWords("'Cause somebody stole my car radio"));
// console.log(reverseWords("And now I just sit in silence"));
