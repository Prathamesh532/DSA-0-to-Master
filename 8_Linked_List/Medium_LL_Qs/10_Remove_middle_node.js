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
// brute force ---> O(N) + O(N/2)
// Removes the middle node of a linked list
const removeMiddleNode = (head) => {
  if (head == null) return null; // Handle edge case: empty list

  // Step 1: Count the total number of nodes in the linked list
  let temp = head;
  let cnt = 0;
  while (temp !== null) {
    cnt++;
    temp = temp.next;
  }

  // Step 2: Calculate the index of the middle node
  // Subtracting 1 ensures we stop at the node just before the middle
  let middle = Math.floor(cnt / 2) - 1;

  // Step 3: Traverse to the node just before the middle node
  temp = head;
  for (let i = 0; i < middle; i++) {
    temp = temp.next;
  }

  // Step 4: Remove the middle node by skipping it
  let middleNode = temp.next; // Pointer to the middle node
  temp.next = temp.next ? temp.next.next : null; // Adjust the next pointer

  // Optional: Clean up the removed node's reference
  if (middleNode) middleNode.next = null;

  // Return the modified linked list
  return head;
};

// Optimal solution --> using Tortoise & Hare Algo ---> O(N/2)
const removeMiddleNode_optimal = (head) => {
  if (head == null) return null; // Handle edge case: empty list

  let fast = head; // Fast pointer moves two steps at a time
  let slow = head; // Slow pointer moves one step at a time

  // Move fast pointer two steps and slow pointer one step until fast reaches the end
  fast = fast.next.next;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // Step 1: `slow` now points to the node just before the middle node
  // Step 2: Remove the middle node
  let deleteNode = slow.next; // Pointer to the middle node
  slow.next = slow.next.next; // Adjust the next pointer to skip the middle node

  // Optional: Clean up the removed node's reference
  deleteNode = null;

  // Return the modified linked list
  return head;
};

// Example Usage
let arr = [1]; // Example array
let head = ArraytoLL(arr); // Convert array to linked list
head = removeMiddleNode(head);
PrintLL(head);
