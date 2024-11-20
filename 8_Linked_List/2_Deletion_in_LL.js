// Creating a Node class to represent an element in the linked list
class Node {
  constructor(data) {
    this.data = data; // Data to store in the node
    this.next = null; // Pointer to the next node in the linked list
  }
}

// Function to convert an array into a linked list
const ArrayToLinkedList = (arr) => {
  // base case
  if (arr.length === 0) return null;

  const head = new Node(arr[0]);
  let currentNode = head;

  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(arr[i]);
    currentNode.next = newNode;
    currentNode = newNode;
  }

  return head;
};

// Print Function
const PrintLL = (head) => {
  let temp = head;
  //   let LL = [];
  while (temp !== null) {
    // LL.push(temp.data);
    console.log(temp.data, " ");
    temp = temp.next;
  }
  //   console.log(LL);
};

// Deletion in Linked List
// HEAD --->
const DeleteHead = (head) => {
  // edge case
  if (head.data === null || head.next === null) return null;

  /* 
  The DeleteHead function has a minor issue: it doesn’t update the head reference after deleting the head node. 
  In JavaScript, modifying a parameter (like head) within a function doesn’t affect the variable passed in from outside the function. 
  */

  //   let temp = head;
  //   let newHead = head.next;
  //   delete temp.data;
  return head.next;
};

// TAIL --->
const DeleteTail = (head) => {
  // edge case
  if (head.data === null || head.next === null) return null;

  // Create a temporary pointer for traversal
  let temp = head;

  // Traverse the list until the second-to-last node
  while (temp.next.next !== null) temp = temp.next;

  // Nullify the connection from the second-to-last node to delete the last node
  temp.next = null;

  // Return the updated head of the linked list
  return head;
};

// Kth Position
const DeleteKthNode = (head, k) => {
  if (head === null) return null;

  if (k == 1) return head.next; // deleting 1st/Head of LL

  let temp = head;
  let cnt = 0;
  let prevNode = null;

  while (temp.next !== null) {
    cnt++;
    if (cnt == k) {
      prevNode.next = prevNode.next.next;
      break;
    }
    prevNode = temp;
    temp = temp.next;
  }

  return head;
};

// Value/date
const DeleteValue = (head, value) => {
  if (head == null) return null;

  if (head.data == value) return head.next;

  let temp = head;
  let prevNode = null;

  while (temp.next !== null) {
    if (temp.data === value) {
      prevNode.next = prevNode.next.next;
      break;
    }
    prevNode = temp;
    temp = temp.next;
  }

  return head;
};

// Example array to be converted into a linked list
let arr = [10, 20, 30, 40];
let head = ArrayToLinkedList(arr);
console.log("head--->", head.data);

/* 
JavaScript, when you update head to point to head.next, the original head node isn’t immediately removed from memory. 
However, JavaScript has automatic garbage collection, meaning that if there are no references left to the deleted node, 
it will be automatically marked for deletion and cleared from memory. 
*/

// Delete Head/1st
// head = DeleteHead(head);

// Delete Tail/last
// head = DeleteTail(head);

// Delete Kth Position of Node
head = DeleteKthNode(head, 2);

// Delete Data(value) of Node
head = DeleteValue(head, 30);
PrintLL(head);
