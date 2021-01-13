/**
 * 
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.

 * @param {number[]} nums
 * @return {number}
 */
//no extra memory, n log n
var singleNumber = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] != nums[i] && nums[i + 1] != nums[i]) {
      return nums[i];
    }
  }
};

// l(n)
var singleNumber = function (nums) {
  const map = {};
  nums.forEach((num) => {
    if (map[num]) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  });

  const keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (map[key] === 1) {
      return key;
    }
  }
};
