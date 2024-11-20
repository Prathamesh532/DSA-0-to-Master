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

// REVERSE LINKED LIST FUNCTION
// This function reverses a linked list from a given head node and returns the new head
const ReverseLL = (head) => {
  let temp = head;
  let prev = null;

  while (temp !== null) {
    let nextNode = temp.next; // Store next node
    temp.next = prev; // Reverse the current node's pointer
    prev = temp; // Move prev and temp one step forward
    temp = nextNode;
  }
  return prev; // Return the new head of the reversed linked list
};

/* ************************ */
/* Code Function Here */
// BRUTE FORCE PALINDROME CHECK USING STACK
// Time Complexity: O(2N) ~ O(N), Space Complexity: O(N)
const isPalindrome = (head) => {
  if (head.next == null) return true;

  let temp = head;
  const myStack = new Stack();

  // STEP 1: Push all linked list data into the stack
  while (temp !== null) {
    myStack.push(temp.data);
    temp = temp.next;
  }

  // STEP 2: Compare linked list data with stack's top data
  temp = head;
  while (temp !== null) {
    let stackELe = myStack.pop();
    if (stackELe !== temp.data) return false; // Return false if mismatch is found
    temp = temp.next;
  }

  return true; // Return true if all elements matched
};

// OPTIMAL PALINDROME CHECK WITHOUT EXTRA SPACE
const isPalindrome_optimal = (head) => {
  if (head == null || head.next == null) return true;

  // STEP 1: Finding the middle of the linked list
  let slow = head;
  let fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // STEP 2: Reverse the second half of the linked list
  let newHead = ReverseLL(slow.next);

  // STEP 3: Compare the first half and the reversed second half
  let first = head;
  let second = newHead;

  while (second !== null) {
    if (first.data !== second.data) {
      ReverseLL(newHead); // Restore original order before returning false
      return false;
    }
    first = first.next;
    second = second.next;
  }

  // Restore the original order of the linked list
  ReverseLL(newHead);
  return true;
};

// Example Usage
let arr = [1, 2]; // Example array
let head = ArraytoLL(arr); // Convert array to linked list

// Run the optimal palindrome check
let check2 = isPalindrome_optimal(head);
console.log("check2", check2); // Output the result

// Print the linked list (optional)
// PrintLL(head);
