// Node class to define the structure of each node in the doubly linked list
class Node {
  constructor(data, next = null, back = null) {
    this.data = data; // Value of the node
    this.next = next; // Pointer to the next node in the list
    this.back = back; // Pointer to the previous node in the list
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
  let n = arr.length;

  // Initialize head with the first element of the array
  const head = new Node(arr[0]);
  let prevNode = head;

  // Iterate through the remaining elements of the array
  for (let i = 1; i < n; i++) {
    // Create a new node with a back pointer to the previous node
    let newNode = new Node(arr[i], null, prevNode);
    prevNode.next = newNode; // Link previous node to the new node
    prevNode = prevNode.next; // Move to the next node in the list
  }

  return head; // Return the head of the list
};

/* Code Function Here */
const MiddleInLL = (head) => {
  // If the list is empty or has only one node, return the head as the middle node
  if (head == null || head.next == null) return head;

  // Temporary pointer to traverse the list
  let temp = head;
  // Counter to keep track of the number of nodes
  let cnt = 0;

  // First loop: Traverse the list to count the total number of nodes
  while (temp !== null) {
    cnt++; // Increment node count
    temp = temp.next; // Move to the next node
  }

  // Calculate the index of the middle node (0-based index)
  let middle = Math.floor(cnt / 2);
  console.log(middle); // Log the middle index for debugging

  // Reset temp pointer to head to find the middle node
  temp = head;
  // Second loop: Move temp pointer to the middle node
  for (let i = 0; i < middle; i++) {
    temp = temp.next; // Move to the next node
  }

  // Return the data of the middle node
  return temp.data;
};

// Example usage:
const arr = [10, 20, 30, 40, 50];
let head = ArrayToDLL(arr); // Convert array to doubly linked list
let middle = MiddleInLL(head);
console.log(middle);

// PrintDll(head);
