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

// Function to delete the head node of a doubly linked list
const DeleteHead = (head) => {
  if (head == null || head.next == null) return null; // If list is empty or has one node, return null

  let newHead = head.next; // Set the second node as the new head
  newHead.back = null; // Remove the back link to the old head
  head.next = null; // Clear the next pointer of the old head

  return newHead; // Return the new head
};

// Function to delete the tail node of a doubly linked list
const DeleteTail = (head) => {
  if (head == null || head.next == null) return null; // If list is empty or has one node, return null

  let temp = head;
  // Traverse to the last node (tail)
  while (temp.next !== null) {
    temp = temp.next;
  }

  let prev = temp.back; // Get the previous node
  temp.back = null; // Clear the back link of the last node
  prev.next = null; // Clear the next link of the previous node, making it the new tail

  return head; // Return the head of the list
};

// Function to delete the node at the k-th position in a doubly linked list
const DeleteKthPosition = (head, k) => {
  if (head == null) return null; // If list is empty, return null

  // If k is 1, delete the head node
  if (k == 1) return DeleteHead(head);

  let temp = head;
  let cnt = 0;

  // Traverse to the k-th position
  while (temp !== null) {
    cnt++;
    if (cnt == k) break;
    temp = temp.next;
  }

  if (temp == null) return head; // If k is beyond the length of the list, return head

  // If k-th node is the tail, delete the tail
  if (temp.next == null) return DeleteTail(head);

  // Update links to remove the k-th node
  let prevNode = temp.back;
  let nextNode = temp.next;

  prevNode.next = nextNode; // Link previous node to next node
  nextNode.back = prevNode; // Link next node back to previous node

  // Clear links of the deleted node
  temp.next = null;
  temp.back = null;

  return head; // Return the head of the list
};

// Function to delete a given node by its value in a doubly linked list
const DeleteValue = (value) => {
  if (value == null) return; // If node is null, return

  let prev = value.back;
  let next = value.next;

  // If node is the tail
  if (next == null) {
    prev.next = null; // Update the previous node's next link
    value.back = null; // Clear the back link of the current node
    return;
  }

  // If node is not the tail
  prev.next = next; // Link previous node to the next node
  next.back = prev; // Link next node back to the previous node

  // Clear links of the deleted node
  value.back = null;
  value.next = null;
};

// Example usage:
const arr = [10, 20, 30, 40];
let head = ArrayToDLL(arr); // Convert array to doubly linked list
PrintDll(head); // Print the doubly linked list
