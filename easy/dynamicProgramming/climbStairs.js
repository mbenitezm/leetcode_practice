/**
 * You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45

 * @param {number} n
 * @return {number}
 */
// memoization;
var climbStairs = function (n, mem = {}) {
  if (mem[n]) {
    return mem[n];
  }

  if (n === 1 || n === 2) {
    return n;
  }

  mem[n] = climbStairs(n - 1, mem) + climbStairs(n - 2, mem);
  return mem[n];
};

// Bottom up
var climbStairs = function (n) {
  if (n === 1 || n === 2) {
    return n;
  }

  let first = 1;
  let second = 2;
  for (let i = 2; i < n; i++) {
    let temp = first + second;
    first = second;
    second = temp;
  }

  return second;
};
