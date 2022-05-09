/**
 * @param {number} val 
 * @param {ListNode} next 
 */
const ListNode = function(val, next) {
    this.val = (val === undefined ? 0 : val) 
    this.next = (next === undefined ? null : next)
};

/**
 * @param {number[]} numbers
 * @returns {ListNode} head
 */
const initLinkedList = function(numbers) {
    let head = new ListNode(); // false head; let the loop make the nodes, then return head.next
    let body = head;
    for (let index = 0; index < numbers.length; index++) {
        body.next = new ListNode(numbers[index]);
        body = body.next;
    }
    return head.next;
};

/**
 * @param {ListNode} head 
 * @returns {string} linkedListStr
 */
const strLinkedList = function(head) {
    let str = "["; // start with an open bracket
    while (head) { // loop as long as we have nodes
        str += head.val + ","; // append the value of the current node to the string
        head = head.next; // move to the next node
    }
    return str.substring(0, str.length - 1) + "]"; // remove trailing comma, then add a closing bracket
};

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @returns {ListNode} list3
 */
 const addTwoNumbers = function(list1, list2) {
    let head = new ListNode(); // false head; we will handle node creation in the loop, and return head.next
    let body = head; // use this to move to the next node inside the loop
    let carry = 0; // this will be 1 if we need to carry a value over to the next greater digit
    while (list1 || list2 || carry) { // loop as long as either list has elements remaining, or we need to carry a value
        let val1 = 0; // let node values default to zero in case we've already reached the end of the list
        let val2 = 0;
        if (list1) { // if a list has nodes remaining, store the value of the current node and move to the next one
            val1 = list1.val;
            list1 = list1.next;
        }
        if (list2) {
            val2 = list2.val;
            list2 = list2.next;
        }
        let sum = val1 + val2 + carry;
        body.next = new ListNode(sum % 10); // only store the lower digit of the sum; let carry handle the greater digit if it exists
        body = body.next; // move to the node we just made
        carry = Math.floor(sum / 10); // if the sum is 10 or more, we will need to carry a 1
    }
    return head.next;
};

const list1 = initLinkedList([2, 4, 3]);
const list2 = initLinkedList([5, 6, 4]);
console.log("list1 = " + strLinkedList(list1));
console.log("list2 = " + strLinkedList(list2));
console.log("list1 + list2 = list3 = " + strLinkedList(addTwoNumbers(list1, list2)));