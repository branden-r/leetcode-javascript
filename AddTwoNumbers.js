/**
 * creates and returns a list node with the given values, or default values if no such values are given
 * @param {number} val
 * @param {ListNode} next
 */
const ListNode = (val, next) => {
  return {
    val: val === undefined ? 0 : val, // value of the current node
    next: next === undefined ? null : next,
  }; // reference to the next node
};

/**
 * creates a linked list containing one node for each of the given numbers
 * @param {number[]} numbers
 * @returns {ListNode} head
 */
const initLinkedList = (numbers) => {
  const head = ListNode(); // false head; let the loop make the nodes, then return head.next
  let body = head; // this will track our current node as we iterate
  numbers.forEach((number) => {
    body.next = ListNode(number); // create a node that holds the current number
    body = body.next; // move to the node we just created
  });
  return head.next; // skip the false head; return the rest of the list
};

/**
 * converts a linked list to a string
 * @param {ListNode} head
 * @returns {string} linkedListStr
 */
const strLinkedList = (head) => {
  let str = "["; // start with an open bracket
  while (head) {
    // loop as long as we have nodes
    str += head.val + ","; // append the value of the current node to the string
    head = head.next; // move to the next node
  }
  return str.slice(0, -1) + "]"; // remove trailing comma, then add a closing bracket
};

/**
 * adds two non-empty linked list representations of non-negative integers, with their digits stored in reverse order
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @returns {ListNode} sumList
 */
const addTwoNumbers = (list1, list2) => {
  let head = ListNode(); // false head; we will handle node creation in the loop, and return head.next
  let body = head; // use this to move to the next node inside the loop
  let carry = 0; // this will be 1 if we need to carry a value over to the next greater digit
  while (list1 || list2 || carry) {
    // loop as long as either list has elements remaining, or we need to carry a value
    let val1 = 0; // let node values default to zero in case we've already reached the end of the list
    let val2 = 0;
    if (list1) {
      // if a list has nodes remaining, store the value of the current node and move to the next one
      val1 = list1.val;
      list1 = list1.next;
    }
    if (list2) {
      val2 = list2.val;
      list2 = list2.next;
    }
    let sum = val1 + val2 + carry;
    body.next = ListNode(sum % 10); // only store the lower digit of the sum; let carry handle the greater digit if it exists
    body = body.next; // move to the node we just made
    carry = Math.floor(sum / 10); // if the sum is ten or more, we will need to carry a one
  }
  return head.next;
};

const list1 = initLinkedList([2, 4, 3]);
const list2 = initLinkedList([5, 6, 4]);
console.log("list1 = " + strLinkedList(list1));
console.log("list2 = " + strLinkedList(list2));
console.log(
  "list1 + list2 = sumList = " + strLinkedList(addTwoNumbers(list1, list2))
);
