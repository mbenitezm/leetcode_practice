/**
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isMirror = function (root1, root2) {
  if (root1 === null && root2 === null) return true;
  if (root1 === null || root2 === null) return false;
  return (
    root1.val === root2.val &&
    isMirror(root1.left, root2.right) &&
    isMirror(root1.right, root2.left)
  );
};

var isSymmetric = function (root) {
  return isMirror(root, root);
};
