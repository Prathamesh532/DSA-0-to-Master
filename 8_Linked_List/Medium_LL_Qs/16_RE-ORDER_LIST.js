// Node class to define the structure of each node in the doubly linked list
class Node {
  constructor(data, next = null) {
    this.data = data; // Value of the node
    this.next = next; // Pointer to the next node in the list
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

/* ************************ */
/* Code Function Here */
// Brute Force Approach
// Time Complexity: O(n) for traversing the list + O(n) for rearranging nodes = O(n)
// Space Complexity: O(n) for storing nodes in the list array.
const reorder_list = (head) => {
  // If the list is empty or contains only one node, no reordering is needed.
  if (head == null || head.next == null) return head;

  // Step 1: Traverse the list and store all nodes in an array.
  let temp = head;
  let list = [];

  while (temp !== null) {
    list.push(temp); // Store each node in the array.
    temp = temp.next;
  }

  // Step 2: Use two pointers to reorder the list.
  temp = head;
  let i = 0; // Pointer for the start of the list.
  let j = list.length - 1; // Pointer for the end of the list.

  while (i < j) {
    // Connect the current node to the node from the end.
    list[i].next = list[j];
    i++; // Move the start pointer forward.

    // If pointers overlap or cross, break the loop.
    if (i >= j) break;

    // Connect the end node to the next node from the start.
    list[j].next = list[i];
    j--; // Move the end pointer backward.
  }

  // Ensure the last node points to null to terminate the list.
  list[i].next = null;
};

// Optimal Approach
// Time Complexity: O(n) for finding the middle + O(n) for reversing the second half + O(n) for merging = O(n)
// Space Complexity: O(1), as no additional space is used apart from pointers.
const reorder_list_optimal = (head) => {
  if (head == null || head.next == null) return head; // Handle edge cases.

  let slow = head; // Slow pointer to find the middle of the list.
  let fast = head; // Fast pointer to find the middle of the list.
  let temp = head; // Temporary pointer for traversing the list.

  // Step 1: Find the middle of the list using slow and fast pointers.
  while (fast !== null && fast.next !== null) {
    slow = slow.next; // Slow moves one step.
    fast = fast.next.next; // Fast moves two steps.
  }

  // Step 2: Reverse the second half of the list starting from the middle.
  let middle = reverseLL(slow); // `reverseLL` reverses a linked list.

  // Step 3: Merge the two halves of the list.
  while (middle.next !== null) {
    let nextNode = temp.next; // Save the next node of the first half.
    let middleNext = middle.next; // Save the next node of the reversed half.

    // Reorder by connecting nodes alternately from the first and reversed halves.
    temp.next = middle;
    middle.next = nextNode;

    // Move the pointers forward.
    temp = nextNode;
    middle = middleNext;
  }

  return head; // Return the reordered list.
};

// Helper Function: Reverse a Linked List
// Time Complexity: O(n), where n is the number of nodes in the list.
// Space Complexity: O(1), as no additional space is used.
const reverseLL = (head) => {
  let prev = null; // Previous node.
  let curr = head; // Current node.

  while (curr !== null) {
    let nextTemp = curr.next; // Save the next node.
    curr.next = prev; // Reverse the current node's pointer.
    prev = curr; // Move prev forward.
    curr = nextTemp; // Move curr forward.
  }

  return prev; // Return the new head of the reversed list.
};

const arr = [1, 2, 3, 4];
let head = ArraytoLL(arr);

PrintLL(head);
