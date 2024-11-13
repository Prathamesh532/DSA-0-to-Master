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

/* ************************ */
/* Code Function Here */
const ReverseLL = (head) => {
  // If the list is empty or contains only one node, return the head (already reversed).
  if (head == null || head.next == null) return head;

  // Initialize pointers:
  // - `temp` starts at `head` and will traverse the list.
  // - `prev` is initially `null` and will eventually be the new head of the reversed list.
  let temp = head;
  let prev = null;

  // Traverse the list and reverse the links one by one.
  while (temp !== null) {
    // Store the next node temporarily before changing any links.
    let nextNode = temp.next;

    // Reverse the link by making `temp.next` point to `prev`.
    temp.next = prev;

    // Move the `prev` pointer forward to the current node (`temp`).
    prev = temp;

    // Move the `temp` pointer forward to the next node (`nextNode`).
    temp = nextNode;
  }

  // After the loop, `prev` points to the new head of the reversed list.
  return prev;
};

// Example usage:
const arr = [10, 20, 30, 40, 50];
let head = ArrayToDLL(arr); // Convert array to doubly linked list
head = ReverseLL(head);
PrintDll(head);
