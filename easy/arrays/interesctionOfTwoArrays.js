/**
 * Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const smallestNums = nums1.length > nums2.length ? nums2 : nums1;
  const biggestNums = nums1.length > nums2.length ? nums1 : nums2;
  map = {};
  smallestNums.forEach((num) => {
    if (map[num]) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  });

  const intersection = [];
  let i = 0;
  while (i < biggestNums.length || smallestNums.length < intersection.length) {
    if (map[biggestNums[i]]) {
      intersection.push(biggestNums[i]);
      map[biggestNums[i]] -= 1;
    }
    i++;
  }

  return intersection;
};
