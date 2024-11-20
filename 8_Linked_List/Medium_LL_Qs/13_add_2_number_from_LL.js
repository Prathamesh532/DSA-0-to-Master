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
// Approach 1: Using Arrays and Numbers
const add2LL = (l1, l2) => {
  // If either linked list is null, return null
  if (l1 == null || l2 == null) return null;

  let list1 = [];
  let list2 = [];

  // Traverse both linked lists and collect the values into arrays
  while (l1 !== null && l2 !== null) {
    list1.push(l1.data); // Add data from l1
    list2.push(l2.data); // Add data from l2
    l1 = l1.next;
    l2 = l2.next;
  }

  // If one list is longer, add remaining values
  if (l1 !== null) list1.push(l1.data);
  else if (l2 !== null) list2.push(l2.data);

  // Reverse the arrays to represent numbers in the correct order
  list1.reverse();
  list2.reverse();

  // Convert the arrays to numbers
  let num1 = Number(list1.join(""));
  let num2 = Number(list2.join(""));

  // Add the two numbers
  let res = num1 + num2;

  // Convert the result to a reversed array of digits
  let reversedArray = res
    .toString() // Convert the result to a string
    .split("") // Split the string into an array of characters
    .reverse() // Reverse the array to maintain the linked list order
    .map(Number); // Convert each character back to a number

  return reversedArray; // Return the reversed array
};

/*
Time Complexity: O(N + M)
  - O(N) for traversing linked list l1
  - O(M) for traversing linked list l2
  - O(N) + O(M) for reversing and joining arrays into numbers
  - Number conversion and addition is constant for reasonable inputs.

Space Complexity: O(N + M)
  - O(N) for storing list1
  - O(M) for storing list2
*/

// Approach 2: Directly Manipulating Linked Lists
const add2LL_v2 = (l1, l2) => {
  // If either linked list is null, return null
  if (l1 == null || l2 == null) return null;

  let temp1 = l1; // Pointer to traverse the first linked list
  let temp2 = l2; // Pointer to traverse the second linked list

  let dummyNode = new Node(-1); // Dummy node to start the result list
  let current = dummyNode; // Pointer to construct the result list
  let carry = 0; // To store carry from the addition

  // Traverse both linked lists and handle carry
  while (temp1 !== null || temp2 !== null || carry > 0) {
    let sum = carry; // Start with the carry from the previous step

    if (temp1) {
      sum += temp1.data; // Add value from the first list
      temp1 = temp1.next; // Move to the next node
    }

    if (temp2) {
      sum += temp2.data; // Add value from the second list
      temp2 = temp2.next; // Move to the next node
    }

    // Create a new node with the current digit
    let newNode = new Node(sum % 10);

    // Update carry for the next digit
    carry = Math.floor(sum / 10);

    // Link the new node to the result list
    current.next = newNode;
    current = current.next;
  }

  return dummyNode.next; // Return the next node of the dummy (start of the result list)
};

/*
Time Complexity: O(max(N, M))
  - N is the length of l1, M is the length of l2
  - We traverse both lists and process their values.

Space Complexity: O(max(N, M))
  - The size of the resulting linked list will be the maximum of N and M, plus one node for carry if needed.
*/

// Example Usage
let arr1 = [1, 2, 3]; // Example array
let arr2 = [5, 3, 2];
let head1 = ArraytoLL(arr1); // Convert array to linked list
let head2 = ArraytoLL(arr2);

let res = add2LL_v2(head1, head2);
console.log(res);

// console.log("LL-1");
// PrintLL(head1);
// console.log("LL-2");
// PrintLL(head2);
