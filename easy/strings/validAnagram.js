// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

var createDictionary = function (s) {
  return [...s].reduce((dictionary, c) => {
    if (dictionary[c]) {
      dictionary[c] += 1;
      return dictionary;
    } else {
      dictionary[c] = 1;
      return dictionary;
    }
  }, {});
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  const dictionary = createDictionary(s);

  [...t].forEach((c) => {
    if (!dictionary[c]) return false;
    dictionary[c] -= 1;
  });

  for (key of Object.keys(dictionary)) {
    if (dictionary[key] != 0) return false;
  }

  return true;
};
