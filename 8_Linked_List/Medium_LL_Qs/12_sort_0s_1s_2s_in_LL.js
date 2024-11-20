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
// brute force
// Function to sort a linked list containing only 0s, 1s, and 2s using counting
const sort012 = (head) => {
  // If the list is empty or contains only one node, it's already sorted
  if (head == null || head.next == null) return head;

  // Pointers for traversal
  let temp = head;

  // Counters for 0, 1, and 2
  let cnt0 = 0;
  let cnt1 = 0;
  let cnt2 = 0;

  // Traverse the linked list and count occurrences of 0, 1, and 2
  while (temp !== null) {
    if (temp.data == 0) cnt0++;
    else if (temp.data == 1) cnt1++;
    else cnt2++;
    temp = temp.next;
  }

  // Reset the temp pointer to the head of the list
  temp = head;

  // Reassign values to the nodes based on the counts
  while (temp !== null) {
    if (cnt0 !== 0) {
      temp.data = 0;
      cnt0--;
    } else if (cnt1 !== 0) {
      temp.data = 1;
      cnt1--;
    } else if (cnt2 !== 0) {
      temp.data = 2;
      cnt2--;
    }
    temp = temp.next; // Move to the next node
  }

  // Return the sorted linked list
  return head;
};

// Function to sort a linked list containing 0s, 1s, and 2s using three pointers (optimal approach)
const sort012_optimal = (head) => {
  // If the list is empty or contains only one node, it's already sorted
  if (head == null || head.next == null) return head;

  // Dummy nodes for 0s, 1s, and 2s to simplify appending
  let oneDummy = new Node(-1); // Dummy node for the list of 1s
  let zeroDummy = new Node(-1); // Dummy node for the list of 0s
  let twoDummy = new Node(-1); // Dummy node for the list of 2s

  // Tail pointers for each sublist
  let one = oneDummy;
  let zero = zeroDummy;
  let two = twoDummy;

  // Pointer to traverse the original list
  let temp = head;

  // Traverse the original list and separate nodes into three sublists
  while (temp !== null) {
    if (temp.data == 0) {
      zero.next = temp; // Append to the 0s list
      zero = zero.next; // Move the tail of the 0s list
    } else if (temp.data == 1) {
      one.next = temp; // Append to the 1s list
      one = one.next; // Move the tail of the 1s list
    } else {
      two.next = temp; // Append to the 2s list
      two = two.next; // Move the tail of the 2s list
    }
    temp = temp.next; // Move to the next node
  }

  // Connect the three sublists together
  zero.next = oneDummy.next ? oneDummy.next : twoDummy.next; // Attach the 1s list after the 0s list
  one.next = twoDummy.next; // Attach the 2s list after the 1s list
  two.next = null; // Terminate the 2s list

  // The new head of the sorted list will be at the start of the 0s sublist
  let newHead = zeroDummy.next;

  // Return the new sorted linked list
  return newHead;
};

// Example Usage
let arr = [1, 2, 2, 1, 2, 0, 2, 2]; // Example array
let head = ArraytoLL(arr); // Convert array to linked list
head = sort012_optimal(head);
PrintLL(head);
