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
// Brute force approach - Time Complexity: approximately O(N^2), not exactly.
// This method iterates through all possible pairs in the linked list to find those that sum up to the given value.
const findPairsWithGivenSum = (head, sum) => {
  // If the linked list is empty, return an empty array as no pairs can be found.
  if (head == null) return [];

  let temp1 = head; // Pointer to traverse the list from the start.
  let pairs = []; // Array to store pairs that match the given sum.

  // Outer loop to pick the first node in the pair.
  while (temp1 !== null) {
    let temp2 = temp1.next; // Pointer to traverse the rest of the list after temp1.

    // Inner loop to pick the second node in the pair.
    while (temp2 !== null && temp1.data + temp2.data <= sum) {
      // If the sum of the two nodes matches the target, add the pair to the result.
      if (temp1.data + temp2.data == sum) {
        pairs.push([temp1.data, temp2.data]);
      }
      temp2 = temp2.next; // Move to the next node in the list.
    }
    temp1 = temp1.next; // Move to the next node in the outer loop.
  }

  return pairs; // Return the list of pairs.
};

// Optimal approach (using two pointers) - Time Complexity: approximately O(2N).
// This method assumes the linked list is sorted and uses two pointers to find pairs efficiently.
const findPairsWithGivenSum_optimal = (head, sum) => {
  // If the linked list is empty, return an empty array as no pairs can be found.
  if (head == null) return [];

  let temp = head; // Pointer to traverse the list to find the last node.
  let pairs = []; // Array to store pairs that match the given sum.

  // Traverse to the last node in the list to initialize the right pointer.
  while (temp.next !== null) {
    temp = temp.next;
  }

  let left = head; // Initialize the left pointer at the start of the list.
  let right = temp; // Initialize the right pointer at the end of the list.

  // Loop until the left pointer is less than the right pointer.
  while (left.data < right.data) {
    let res = left.data + right.data; // Calculate the sum of the values at the two pointers.

    // If the sum matches the target, add the pair to the result and move both pointers.
    if (res === sum) {
      pairs.push([left.data, right.data]);
      left = left.next; // Move the left pointer forward.
      right = right.back; // Move the right pointer backward.
    } else if (res > sum) {
      // If the sum is greater than the target, move the right pointer backward to decrease the sum.
      right = right.back;
    } else {
      // If the sum is less than the target, move the left pointer forward to increase the sum.
      left = left.next;
    }
  }

  return pairs; // Return the list of pairs.
};

const arr = [1, 2, 4, 5, 6, 8, 9];
let head = ArraytoDLL(arr);
let res = findPairsWithGivenSum_optimal(head, 7);
console.log(res);

// PrintDLL(head);
