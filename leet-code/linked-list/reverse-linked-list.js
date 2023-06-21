/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  if (head === null) return null;
  const nodeLinks = [];
  let node = head;
  while (node) {
    nodeLinks.push(node);
    node = node.next;
  }
  for (let i = nodeLinks.length - 1; i >= 0; i--) {
    const node = nodeLinks[i];
    if (i === 0) {
      node.next = null;
      return nodeLinks[nodeLinks.length - 1];
    } else {
      node.next = nodeLinks[i - 1];
    }
  }
};
