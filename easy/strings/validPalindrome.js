// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

// Constraints:

// s consists only of printable ASCII characters.

var reverseString = function (s) {
  return [...s].reduce((reversed, c) => c + reversed, '');
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s === '') return true;
  const subbed = s.replace(/\W|_/g, '').toLowerCase();
  return subbed === reverseString(subbed);
};
