// Creating a Node class to represent an element in the linked list
class Node {
  constructor(data) {
    this.data = data; // Data to store in the node
    this.next = null; // Pointer to the next node in the linked list
  }
}

//**************************************************************/
// Function to convert an array into a linked list
const ArrayToLinkedList = (arr) => {
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

// Example array to be converted into a linked list
let arr = [10, 20, 30, 40];
const head = ArrayToLinkedList(arr);
console.log(head);

//**************************************************************/
// Calculate the length of the linked list
let temp = head; // Start from the head node
let cnt = 0; // Counter for length
while (temp) {
  temp = temp.next; // Move to the next node
  cnt++; // Increment counter for each node
}
console.log("Length of linked list ---->", cnt); // Display the length of the linked list

//**************************************************************/
// Traversing and printing each element in the linked list
let temp2 = head; // Start from the head node
while (temp2 !== null) {
  console.log(temp2.data); // Print the data of the current node
  temp2 = temp2.next; // Move to the next node
}

//**************************************************************/
// Function to search for a target value in the linked list (head node is given)
const searchInLinkedList = (head, target) => {
  let temp = head; // Start from the head node
  while (temp !== null) {
    if (temp.data == target) return true; // If target found, return true
    temp = temp.next; // Move to the next node
  }
  return false; // Return false if target is not found
};

let target = 10;
console.log(
  "Search in Linked List:",
  `Is ${target} present?`,
  searchInLinkedList(head, target)
);
