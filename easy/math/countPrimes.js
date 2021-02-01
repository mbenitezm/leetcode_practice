/**
 * Count the number of prime numbers less than a non-negative number, n.

 

Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
Example 2:

Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 0
 

Constraints:

0 <= n <= 5 * 106
 * @param {number} n
 * @return {number}
 */

var countPrimes = function (n) {
  if (n < 2) {
    return 0;
  }

  let arr = new Array(n).fill(true);

  // the terminating loop condition can be p < √n, as all non-primes ≥ √n must have already been marked off. When the loop terminates, all the numbers in the table that are non-marked are prime.
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (arr[i]) {
      // 5 starting at 5 × 5 = 25, because 5 × 2 = 10 was already marked off by multiple of 2, similarly 5 × 3 = 15 was already marked off by multiple of 3. Therefore, if the current number is p, we can always mark off multiples of p starting at p2, then in increments of p: p2 + p, p2 + 2p,
      for (let j = Math.pow(i, 2); j < n; j = j + i) {
        arr[j] = false;
      }
    }
  }

  return arr.filter((n, i) => i > 1 && n).length;
};
