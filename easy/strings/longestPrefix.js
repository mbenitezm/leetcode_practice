// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

// /**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {    
  if (strs.length < 1) return '';
  
  const baseString = strs[0];
  let prefix = '';
  for (let index = 0; index < baseString.length; index++) {
      for (let j = 1; j < strs.length; j++) {
          if (!(strs[j][index] === baseString[index])) {
             return prefix;
          }
      }
      prefix += baseString[index];
  }
  
  return prefix;
};
