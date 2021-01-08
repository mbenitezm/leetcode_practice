// Given a 32-bit signed integer, reverse digits of an integer.

// Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0

// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
var reverseString = function (s) {
  return [...s].reduce((reversed, c) => c + reversed, '');
};

var reverse = function (x) {
  const sign = Math.sign(x);
  let numberAsString = x.toString();
  numberAsString = reverseString(numberAsString);
  if (sign < 1) {
    numberAsString = numberAsString.slice(0, numberAsString.length - 1);
  }

  const result = Number(numberAsString) * sign;
  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
    return 0;
  }
  return result;
};
