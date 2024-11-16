// Node class to define the structure of each node in the doubly linked list
class Node {
  constructor(data, next = null) {
    this.data = data; // Value of the node
    this.next = next; // Pointer to the next node in the list
  }
}

// STACK IMPLEMENTATION IN JS :---->
class Stack {
  constructor() {
    this.items = []; // Array to store stack elements
  }

  // PUSH: Add an element to the top of the stack
  push(data) {
    this.items.push(data);
  }

  // POP: Remove and return the top element of the stack
  pop() {
    if (this.items.length === 0) return "Stack is Empty";
    return this.items.pop();
  }
}

// Print linked list elements
const PrintLL = (head) => {
  if (head == null) return null;
  let temp = head;
  while (temp !== null) {
    console.log(temp.data); // Print each node's data
    temp = temp.next;
  }
};

// Convert array to linked list
const ArraytoLL = (arr) => {
  let n = arr.length;
  const head = new Node(arr[0]); // Initialize the head node with the first element
  let currentNode = head;

  // Loop through the array, creating nodes and linking them
  for (let i = 1; i < n; i++) {
    let newNode = new Node(arr[i]);
    currentNode.next = newNode;
    currentNode = newNode;
  }
  return head;
};

// Reverse LL
const ReverseLL = (head) => {
  if (head == null) return null;

  let temp = head;
  let prev = null;
  while (temp !== null) {
    let nextNode = temp.next;
    temp.next = prev;
    prev = temp;
    temp = nextNode;
  }
  return prev;
};

/* ************************ */
/* Code Function Here */
// brute force ---> Reverse-Based Approach ---> O(3N) ~ O(N)
const removeNthFromEnd = (head, n) => {
  // If the linked list is empty or n is invalid, return the original list
  if (head == null || n <= 0) {
    console.log("Invalid value of n");
    return head;
  }

  // Step 1: Reverse the linked list
  let reversedHead = ReverseLL(head);

  // Special case: If n is 1, remove the first node in the reversed list
  if (n === 1) {
    reversedHead = reversedHead.next; // Update the head of the reversed list
  } else {
    let current = reversedHead; // Pointer to traverse the reversed list
    let count = 1; // Counter to track the current position

    // Traverse the reversed list to the (n-1)th node
    while (current !== null && count < n - 1) {
      current = current.next;
      count++;
    }

    // If the (n-1)th node exists and its next node is not null, skip the nth node
    if (current !== null && current.next !== null) {
      current.next = current.next.next; // Remove the nth node from the reversed list
    }
  }

  // Step 2: Reverse the list again to restore the original order
  head = ReverseLL(reversedHead);

  return head; // Return the updated list
};

// Better ---> Better Approach Using Total Node Count ---> O(2N)
const removeNthFromEnd_better = (head, n) => {
  if (head == null || n <= 0) {
    return head; // Return the original list if n is invalid
  }

  let temp = head;
  let cnt = 0;

  while (temp !== null) {
    cnt++;
    temp = temp.next;
  }

  if (cnt == n) return head.next;
  let res = cnt - n;
  temp = head;
  while (temp !== null) {
    res--;
    if (res == 0) break;
    temp = temp.next;
  }

  temp.next = temp.next.next;
  return head;
};

// optimal ---> Two-Pointer Approach ---> O(N)
const removeNthFromEnd_optimal = (head, n) => {
  if (head == null || n <= 0) {
    return head; // Return the original list if n is invalid
  }
  let fast = head;
  for (let i = 0; i < n; i++) fast = fast.next;

  let slow = head;

  if (fast == null) return head.next;

  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  let deleteNode = slow.next;

  slow.next = slow.next.next;
  deleteNode = null;

  return head;
};

// Example Usage
let arr = [1, 2, 3, 4, 5]; // Example array
let head = ArraytoLL(arr); // Convert array to linked list
head = removeNthFromEnd_optimal(head, 2);
PrintLL(head);
