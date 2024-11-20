// Node class to define the structure of each node in the doubly linked list
class Node {
  constructor(data, next = null, back = null) {
    this.data = data; // Value of the node
    this.next = next; // Pointer to the next node in the list
    this.back = back; // pointer to the previous node
  }
}

// Print linked list elements
const PrintDLL = (head) => {
  if (head == null) return null;
  let temp = head;
  while (temp !== null) {
    console.log(temp.data); // Print each node's data
    temp = temp.next;
  }
};

// Convert array to linked list
const ArraytoDLL = (arr) => {
  let n = arr.length;
  const head = new Node(arr[0]); // Initialize the head node with the first element
  let currentNode = head;

  // Loop through the array, creating nodes and linking them
  for (let i = 1; i < n; i++) {
    let newNode = new Node(arr[i]);
    newNode.back = currentNode;
    currentNode.next = newNode;
    currentNode = currentNode.next;
  }
  return head;
};

/* ************************ */
/* Code Function Here */
// Brute Force Approach ---> O(2N) space complexity == O(N)
const deleteAllOccurenceOfK = (head, k) => {
  if (head == null) return null; // Handle edge case for empty list

  let temp = head; // Pointer to traverse the linked list
  let list = []; // Array to store nodes' data excluding the value 'k'

  // Traverse the linked list
  while (temp !== null) {
    if (temp.data !== k) list.push(temp.data); // Push only non-k values into the array
    temp = temp.next; // Move to the next node
  }

  // Convert the array back into a doubly linked list
  let newHead = ArraytoDLL(list); // Assumes ArraytoDLL is a function to create a DLL from an array
  return newHead; // Return the new head of the updated DLL
};

// Better Approach ---> O(N)
const deleteAllOccurenceOfK_better = (head, k) => {
  if (head == null) return null; // Handle edge case for empty list

  let temp = head; // Pointer to traverse the doubly linked list

  // Traverse the list
  while (temp !== null) {
    if (temp.data === k) {
      // If the current node contains 'k'
      if (temp === head) head = head.next; // If the node is the head, update the head pointer

      let nextNode = temp.next; // Pointer to the next node
      let prevNode = temp.back; // Pointer to the previous node

      // Update the pointers of adjacent nodes to skip the current node
      if (prevNode) prevNode.next = nextNode; // Update previous node's next pointer
      if (nextNode) nextNode.back = prevNode; // Update next node's back pointer

      temp = temp.next; // Move to the next node
    } else {
      temp = temp.next; // If data does not match, move to the next node
    }
  }

  return head; // Return the updated head of the DLL
};

const arr = [2, 2, 10, 8, 4, 2, 5, 2];
let head = ArraytoDLL(arr);
head = deleteAllOccurenceOfK_better(head, 2);
PrintDLL(head);
