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
const add1toLL = (head) => {
  if (head == null || head.next == null) return; // Return if list is null or has only one node

  let list = ""; // String to store the linked list number
  let temp = head;

  // Traverse the linked list to form the number as a string
  while (temp !== null) {
    list += temp.data; // Append each node's data to the string
    temp = temp.next; // Move to the next node
  }

  let add1 = Number(list) + 1; // Convert string to number, add 1
  let res = add1.toString().split("").map(Number); // Convert result back to an array of digits

  let newHead = ArraytoLL(res); // Convert the digit array back to a linked list
  return newHead; // Return the updated linked list
};

// Better Approach (Reverse Linked List) ---> O(3N)
const reverseLL = (head) => {
  let temp = head;
  let prev = null;

  // Reverse the linked list
  while (temp !== null) {
    let nextNode = temp.next; // Store the next node
    temp.next = prev; // Reverse the current node's pointer
    prev = temp; // Move prev pointer to the current node
    temp = nextNode; // Move to the next node
  }

  return prev; // Return the new head of the reversed list
};
const add1toLL_V2 = (head) => {
  if (head == null) return null; // Handle empty list case

  head = reverseLL(head); // Reverse the linked list
  temp = head;

  let carry = 1; // Initialize carry to 1 since we need to add 1

  // Traverse the reversed list to handle addition
  while (temp !== null) {
    temp.data += carry; // Add carry to the current node's data

    if (temp.data < 10) {
      // If no carry is generated, stop
      carry = 0;
      break;
    } else {
      temp.data = 0; // Set current node's data to 0 and carry forward
      carry = 1;
    }
    temp = temp.next; // Move to the next node
  }

  if (carry == 1) {
    // If there's still a carry, create a new node
    let newNode = new Node(1);
    head = reverseLL(head); // Reverse the list back to its original order
    newNode.next = head; // Attach the new node at the start
    return newNode;
  }

  head = reverseLL(head); // Reverse the list back to its original order
  return head;
};

// Optimal Approach (Using Recursion) ---> O(N)
const recursiveFunction = (head) => {
  if (head == null) return 1; // Base case: if at the end of the list, return carry as 1

  let carry = recursiveFunction(head.next); // Recur for the next node

  head.data += carry; // Add carry to the current node's data

  if (head.data < 10) return 0; // If no carry is generated, return 0
  head.data = 0; // If carry is generated, set current node's data to 0
  return 1; // Return carry as 1 to propagate back
};
const add1toLL_optimal = (head) => {
  if (head == null) return null; // Handle empty list case

  let carry = recursiveFunction(head); // Start recursive addition from the head

  if (carry == 1) {
    // If there's still a carry, create a new node
    let newNode = new Node(1);
    newNode.next = head; // Attach the new node at the start
    return newNode;
  }
  return head; // Return the updated linked list
};

const arr = [9, 9, 9];
let head = ArraytoLL(arr);

let res = add1toLL_optimal(head);
PrintLL(res);
