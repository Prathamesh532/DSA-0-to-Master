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
// Time Complexity ---> O(N)
const removeDuplicates = (head) => {
  // If the list is empty or contains only one node, return the list as it is.
  if (head == null || head.next == null) return head;

  let temp = head; // Start traversing the list from the head.

  // Loop through the list until the next node is null (end of the list).
  while (temp.next !== null) {
    let nextNode = temp.next; // Get the next node for comparison.

    // If the current node's data matches the next node's data, remove the next node.
    if (nextNode.data == temp.data) {
      temp.next = nextNode.next; // Link the current node to the node after the duplicate.

      // Update the `back` reference of the next node if it exists.
      if (nextNode.next !== null) nextNode.next.back = temp;

      // Clear the removed node's references (optional cleanup).
      nextNode.back = null;
      nextNode.next = null;
    } else {
      // Move to the next node if no duplicate was found.
      temp = temp.next;
    }
  }
  return head; // Return the modified list without duplicates.
};

// Optimized version to remove duplicates from a doubly linked list.
const removeDuplicates_V2 = (head) => {
  // If the list is empty or contains only one node, return the list as it is.
  if (head == null || head.next == null) return head;

  let temp = head; // Start traversing the list from the head.

  // Traverse the list until the end.
  while (temp !== null && temp.next !== null) {
    let nextNode = temp.next; // Get the next node for comparison.

    // Loop through consecutive duplicates and find the first non-duplicate node.
    while (nextNode !== null && temp.data == nextNode.data) {
      nextNode = nextNode.next; // Move to the next node.
    }

    // Link the current node to the first non-duplicate node.
    temp.next = nextNode;

    // Update the `back` reference of the non-duplicate node, if it exists.
    if (nextNode) nextNode.back = temp;

    // Move to the next node in the list.
    temp = temp.next;
  }
  return head; // Return the modified list without duplicates.
};

const arr = [1, 1, 1, 2, 3, 3, 4, 5];
let head = ArraytoDLL(arr);
head = removeDuplicates_V2(head);
PrintDLL(head);
