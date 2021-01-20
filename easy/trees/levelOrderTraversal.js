/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) {
    return [];
  }

  const depth = [root, 'l'];
  let levels = [[]];
  while (depth.length > 1) {
    let node = depth.shift();
    if (node === 'l') {
      levels.push([]);
      depth.push('l');
      continue;
    }

    levels[levels.length - 1].push(node.val);

    if (node.left) {
      depth.push(node.left);
    }

    if (node.right) {
      depth.push(node.right);
    }
  }

  return levels;
};
