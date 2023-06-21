/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
  if (list1 === null && list2 === null) return null;
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  let startNode = null;
  let node1 = null;
  let node2 = null;

  if (list1.val < list2.val) {
    startNode = list1;
    node1 = list1.next;
    node2 = list2;
  } else {
    startNode = list2;
    node2 = list2.next;
    node1 = list1;
  }
  let lastNode = startNode;
  while (node1 || node2) {
    if (node1 && node2) {
      if (node1.val < node2.val) {
        lastNode.next = node1;
        lastNode = node1;
        node1 = node1.next;
      } else {
        lastNode.next = node2;
        lastNode = node2;
        node2 = node2.next;
      }
    } else if (node1 && !node2) {
      lastNode.next = node1;
      lastNode = node1;
      node1 = node1.next;
    } else if (!node1 && node2) {
      lastNode.next = node2;
      lastNode = node2;
      node2 = node2.next;
    }
  }
  return startNode;
};
