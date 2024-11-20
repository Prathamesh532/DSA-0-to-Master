// Node class to define the structure of each node in the doubly linked list
class Node {
  constructor(data, next = null) {
    this.data = data; // Value of the node
    this.next = next; // Pointer to the next node in the list
  }
}

// Function to print all elements of a doubly linked list starting from head
const PrintDll = (head) => {
  let temp = head;
  while (temp != null) {
    // Traverse until the end of the list
    console.log(temp.data); // Print current node's data
    temp = temp.next; // Move to the next node
  }
};

// Function to convert an array into a doubly linked list
const ArrayToDLL = (arr) => {
  if (arr.length === 0) return null; // Edge case: if array is empty, return null

  const head = new Node(arr[0]); // Initialize head node with the first element of array
  let currentNode = head; // Start with the head node

  // Loop through remaining elements and create nodes
  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(arr[i]); // Create a new node for each element
    currentNode.next = newNode; // Link the current node to the new node
    currentNode = newNode; // Move currentNode to the new node
  }

  return head; // Return the head node, which points to the entire linked list
};

/* Code Function Here */
const MiddleInLL_TortoiseAndHare = (head) => {
  // If the list is empty or has only one node, return the head as the middle node
  if (head == null || head.next == null) return head;

  // Initialize two pointers:
  // - `slow` moves one node at a time (tortoise).
  // - `fast` moves two nodes at a time (hare).
  let slow = head;
  let fast = head;

  // Traverse the list:
  // - `fast` moves twice as fast as `slow`.
  // - When `fast` reaches the end, `slow` will be at the middle of the list.
  while (fast !== null && fast.next !== null) {
    slow = slow.next; // Move `slow` one step forward
    fast = fast.next.next; // Move `fast` two steps forward
  }

  // `slow` now points to the middle node, so we return its data
  return slow.data;
};

// Example usage:
const arr = [10, 20, 30, 40];
let head = ArrayToDLL(arr); // Convert array to doubly linked list
let middle = MiddleInLL_TortoiseAndHare(head);
console.log(middle);

// PrintDll(head);
