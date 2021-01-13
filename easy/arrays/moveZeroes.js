/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let pointer1 = 0;
  let pointer2 = 0;
  let amountOfZeros = 0;

  while (pointer2 < nums.length) {
    if (nums[pointer2] != 0) {
      nums[pointer1] = nums[pointer2];
      pointer1++;
    } else {
      amountOfZeros++;
    }
    pointer2++;
  }

  while (amountOfZeros > 0) {
    nums[nums.length - amountOfZeros] = 0;
    amountOfZeros--;
  }
};
