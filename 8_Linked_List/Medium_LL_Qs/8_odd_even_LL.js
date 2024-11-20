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
// Brute Force ---> T.C = O(2N) , S.C = O(N)
const oddEvenLL = (head) => {
  let list = []; // Array to store the reordered values of the linked list
  let temp = head;

  // Collecting values from odd-positioned nodes
  while (temp !== null) {
    list.push(temp.data); // Add the data to the list
    temp = temp.next ? temp.next.next : null; // Move two steps to get the next odd node
  }

  // Reset temp to the second node to collect even-positioned nodes
  temp = head && head.next;
  while (temp !== null) {
    list.push(temp.data); // Add the data to the list
    temp = temp.next ? temp.next.next : null; // Move two steps to get the next even node
  }

  // Reassigning values from the list back to the original linked list
  temp = head;
  let i = 0;
  while (temp !== null) {
    temp.data = list[i]; // Set the data from the reordered list
    i++;
    temp = temp.next; // Move to the next node
  }

  return head; // Return the modified linked list
};

// Optimal solution ---> O(N)
const oddEvenLL_optimal = (head) => {
  if (head == null || head.next == null) return head; // Edge case: If the list is empty or has one node

  let odd = head; // Pointer to track the odd-positioned nodes
  let even = head.next; // Pointer to track the even-positioned nodes
  let evenHead = head.next; // Save the starting point of the even nodes to reconnect later

  // Rearrange the linked list by connecting odd and even nodes separately
  while (even !== null && even.next !== null) {
    odd.next = odd.next ? odd.next.next : null; // Move odd pointer to the next odd node
    even.next = even.next ? even.next.next : null; // Move even pointer to the next even node
    odd = odd.next; // Advance odd pointer
    even = even.next; // Advance even pointer
  }

  odd.next = evenHead; // Connect the end of odd list to the start of even list
  return head; // Return the head of the modified linked list
};

// Example Usage
let arr = [1, 2, 3, 4, 5, 6, 7, 8]; // Example array
let head = ArraytoLL(arr); // Convert array to linked list
head = oddEvenLL_optimal(head);
PrintLL(head);
