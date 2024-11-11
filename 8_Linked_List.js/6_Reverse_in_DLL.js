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

/* Code Function */
// Brute force solution is to use STACK Data-Structure and just swap the data NOT Links

// Optimal Solution ---> Swapping Link (back <---> next)
const ReverseDLL = (head) => {
  // If the list is empty or has only one node, return head as it is already "reversed"
  if (head === null || head.next === null) return head;

  // Initialize the current node as head and prev as null
  let current = head;
  let prev = null;

  // Traverse the list and reverse the pointers
  while (current !== null) {
    // Temporarily store the previous pointer to use later
    prev = current.prev;

    // Swap next and prev for the current node
    current.prev = current.next;
    current.next = prev;

    // Move to the next node in the original list, which is now the previous node in the reversed list
    current = current.prev;
  }

  // At the end of the loop, prev will be at the new head node
  return prev.prev;
};

// Example usage:
const arr = [10, 20, 30, 40];
let head = ArrayToDLL(arr); // Convert array to doubly linked list
head = ReverseDLL(head);
PrintDll(head);
