function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

/* 
  Pseudocode:
  - Convert the word to an array of characters using split('')
  - Reverse the array of characters using reverse()
  - Convert the reversed array back to a string using join('')
  - Check if the original word is equal to the reversed word
  - Return true if they are equal, false otherwise
*/

/*
  Solution Explanation:
  - The function takes a word as input and converts it to an array of characters.
  - It then reverses the array using the reverse() method.
  - The reversed array is converted back to a string using the join('') method.
  - Finally, the function checks if the original word is equal to the reversed word.
  - If they are equal, it means the word is a palindrome and the function returns true.
  - Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
