/**
 * Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

 

Example 1:


Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null && l2 === null) {
    return null;
  }

  if (l1 == null && l2) {
    return l2;
  }

  if (l1 && l2 === null) {
    return l1;
  }

  let merged = l1;
  let prev = null;
  while (l2) {
    if (
      l2.val >= merged.val &&
      (merged.next === null || l2.val <= merged.next.val)
    ) {
      let temp = l2;
      l2 = l2.next;
      temp.next = merged.next;
      merged.next = temp;
    } else if (l2.val <= merged.val) {
      let temp = l2;
      l2 = l2.next;
      temp.next = merged;
      merged = temp;
      if (prev === null) {
        l1 = merged;
      } else {
        prev.next = merged;
      }
    }
    prev = merged;
    merged = merged.next;
  }

  return l1;
};
