/**
 * Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  const depth = [root, 'l'];
  let counter = 0;
  while (depth.length > 1) {
    let node = depth.shift();
    if (node === 'l') {
      counter++;
      depth.push('l');
      continue;
    }

    if (node.left) {
      depth.push(node.left);
    }

    if (node.right) {
      depth.push(node.right);
    }
  }

  return counter + 1;
};
