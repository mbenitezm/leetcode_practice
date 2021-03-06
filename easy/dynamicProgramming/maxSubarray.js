/**
 * 
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [0]
Output: 0
Example 4:

Input: nums = [-1]
Output: -1
Example 5:

Input: nums = [-100000]
Output: -100000
 

Constraints:

1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let arr = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    arr[i] = Math.max(nums[i] + arr[i - 1], nums[i]);
  }

  return Math.max(...arr);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let prev = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prev = Math.max(nums[i] + prev, nums[i]);
    max = Math.max(max, prev);
  }

  return max;
};
