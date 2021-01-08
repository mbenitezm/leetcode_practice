// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

// Note: You may assume the string contains only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const chars = {};
  [...s].forEach((c, index) => {
    if (chars[c]) {
      chars[c] = { index: chars[c].index, count: chars[c].count + 1 };
    } else {
      chars[c] = { index: index, count: 1 };
    }
  });

  const indexes = Object.keys(chars)
    .map((key) => {
      if (chars[key].count === 1) {
        return chars[key].index;
      }
    })
    .filter((el) => el != null || el != undefined)
    .sort((a, b) => a < b);

  if (indexes.length === 0) return -1;
  return indexes[0];
};
