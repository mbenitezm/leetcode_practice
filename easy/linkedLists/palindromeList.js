/**
 * Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
};

var middleNode = function (head, middle) {
  let node = head;
  while (middle > 0) {
    node = node.next;
    middle--;
  }
  return node;
};

var listLength = function (head) {
  let node = head;
  let length = 0;
  while (node) {
    length += 1;
    node = node.next;
  }
  return length;
};

var isPalindrome = function (head) {
  if (head === null) {
    return true;
  }

  let length = listLength(head);
  let middle = Math.floor(length / 2);
  const middleStart = middleNode(head, middle);
  let reverseHead = reverseList(middleStart);

  while (middle > 0) {
    if (head.val != reverseHead.val) {
      return false;
    }
    head = head.next;
    reverseHead = reverseHead.next;
    middle--;
  }
  return true;
};
