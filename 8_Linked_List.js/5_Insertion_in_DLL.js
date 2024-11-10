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

  const head = new Node(arr[0]); // Initialize head with the first element of the array
  let prevNode = head;

  // Iterate through the remaining elements of the array
  for (let i = 1; i < n; i++) {
    let newNode = new Node(arr[i], null, prevNode); // Create a new node
    prevNode.next = newNode; // Link previous node to the new node
    prevNode = prevNode.next; // Move to the next node in the list
  }

  return head; // Return the head of the list
};

// Insert a new head node (before current head)
const InsertHead = (head, value) => {
  let newHead = new Node(value, head, null); // Create new node as new head
  head.back = newHead; // Update back pointer of current head
  return newHead; // Return new head
};

// Insert a new tail node (before current tail)
const InsertTail = (head, value) => {
  if (head == null) return new Node(value, null, null); // If list is empty, return new node as head
  let temp = head;
  while (temp.next !== null) {
    // Traverse to the last node
    temp = temp.next;
  }
  let prev = temp.back; // Get previous node
  let newTail = new Node(value, temp, temp.back); // Create new tail node
  prev.next = newTail; // Link previous node to new tail
  return head; // Return head
};

// Insert a node at the k-th position (before k-th node)
const InsertKthNode = (head, value, k) => {
  if (k == 1) return InsertHead(head, value); // If k=1, insert at head

  let temp = head;
  let cnt = 0;

  while (temp !== null) {
    // Traverse to k-th node
    cnt++;
    if (cnt == k) break;
    temp = temp.next;
  }
  let prev = temp.back; // Get previous node
  let newNode = new Node(value, temp, prev); // Create new node
  prev.next = newNode; // Link previous node to new node
  temp.back = newNode; // Link current node back to new node
  return head; // Return head
};

// Insert a new node before a given node value
const InsertBeforeValue = (value, newValue) => {
  if (value == null) return; // If node is null, return
  let prev = value.back;
  let newNode = new Node(newValue, value, prev); // Create new node
  prev.next = newNode; // Link previous node to new node
  value.back = newNode; // Link current node back to new node
};

// Insert a new node after the head
const InsertHeadAfter = (head, value) => {
  if (head == null) return new Node(value, null, null); // If list is empty, return new node as head
  let nextNode = head.next;
  let newNode = new Node(value, nextNode, head); // Create new node
  head.next = newNode; // Link head to new node
  return head; // Return head
};

// Insert a new node after the tail
const InsertTailAfter = (head, value) => {
  if (head == null) return new Node(value, null, null); // If list is empty, return new node as head
  let temp = head;
  while (temp.next !== null) {
    // Traverse to the last node
    temp = temp.next;
  }
  let newNode = new Node(value, null, temp); // Create new node as tail
  temp.next = newNode; // Link last node to new tail
  return head; // Return head
};

// Insert a node at the k-th position (after k-th node)
const InsertKthAfter = (head, value, k) => {
  if (k == 1) return InsertHeadAfter(head, value); // If k=1, insert after head

  let temp = head;
  let cnt = 0;

  while (temp.next !== null) {
    // Traverse to k-th node
    cnt++;
    if (cnt == k) break;
    temp = temp.next;
  }

  if (temp == null) return; // If position is out of bounds, do nothing
  if (temp.next == null) return InsertTailAfter(head, value); // If at end, insert after tail

  let nextNode = temp.next;
  let newNode = new Node(value, nextNode, temp); // Create new node
  nextNode.back = newNode; // Link next node back to new node
  temp.next = newNode; // Link current node to new node

  return head; // Return head
};

// Insert a new node after a given node value
const InsertAfterValue = (head, value, newValue) => {
  if (head == null) return; // If list is empty, return
  let temp = head;
  while (temp.data !== value) {
    // Traverse until value is found
    temp = temp.next;
  }
  let nextNode = temp.next;
  let newNode = new Node(newValue, nextNode, temp); // Create new node
  temp.next = newNode; // Link current node to new node
  newNode.back = temp; // Link new node back to current node
  return head; // Return head
};

// Example usage:
const arr = [10, 20, 30, 40];
let head = ArrayToDLL(arr); // Convert array to doubly linked list
head = InsertAfterValue(head, 30, 2); // Insert 2 after the node with value 30
PrintDll(head); // Print the doubly linked list
