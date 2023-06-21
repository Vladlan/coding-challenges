/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  if (head === null || head.next === null) {
    return null;
  }
  const nodeLinks = [];
  let node = head;
  while (node) {
    nodeLinks.push(node);
    if (node.next === null) {
      const beforeIndex = nodeLinks.length - 1 - n;
      const index = nodeLinks.length - n;
      const afterIndex = nodeLinks.length - n + 1;
      const nodeBeforeRemove = nodeLinks[beforeIndex];
      const nodeToRemove = nodeLinks[index];
      const nodeAfterRemove = nodeLinks[afterIndex];
      if (nodeBeforeRemove && nodeAfterRemove) {
        nodeBeforeRemove.next = nodeAfterRemove;
        nodeBeforeRemove.val = nodeBeforeRemove.val;
      }
      if (nodeBeforeRemove && !nodeAfterRemove) {
        nodeBeforeRemove.next = null;
      }
      if (!nodeBeforeRemove && nodeAfterRemove) {
        nodeToRemove.next = null;
        return nodeAfterRemove;
      }

      return head;
    } else {
      node = node.next;
    }
  }
};
