class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Print Function
const PrintLL = (head) => {
  let temp = head;
  //   let LL = [];
  while (temp !== null) {
    // LL.push(temp.data);
    console.log(temp.data, " ");
    temp = temp.next;
  }
  //   console.log(LL);
};

// Function to convert an array into a linked list
const ArrayToLinkedList = (arr) => {
  // base case
  if (arr.length === 0) return null;

  const head = new Node(arr[0]);
  let currentNode = head;

  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(arr[i]);
    currentNode.next = newNode;
    currentNode = newNode;
  }

  return head;
};

/* ************************ */
/* Code Function Here */
// Helper function to find the nth node in a linked list.
const findNthNode = (head, n) => {
  let temp = head;
  let cnt = 1; // Start counting from the head.

  // Traverse the linked list until the nth node is reached.
  while (temp !== null) {
    if (cnt == n) return temp; // Return the nth node when the count matches.
    cnt++;
    temp = temp.next;
  }

  // Return null if n is out of bounds (not expected in this problem).
  return temp;
};

const rotateLL = (head, k) => {
  // Base case: If the linked list is empty, return null.
  if (head == null) return null;

  // Step 1: Calculate the length of the linked list.
  let temp = head;
  let len = 1; // Initialize length to 1 since we're starting with the head.

  while (temp.next !== null) {
    temp = temp.next; // Traverse to the next node.
    len++;
  }

  // Step 2: If k is a multiple of the list length, no rotation is needed.
  // Return the original head as the list remains unchanged.
  if (k % len == 0) return head;

  // Step 3: Normalize k to handle cases where k > len.
  k = k % len;

  // Step 4: Create a circular linked list.
  // Point the last node to the head to form a circular structure.
  temp.next = head;

  // Step 5: Find the new head of the rotated list.
  // The new head will be at position (len - k).
  let newhead = findNthNode(head, len - k);

  // Update the head pointer to the new head.
  head = newhead.next;

  // Step 6: Break the circular linked list to form a proper linked list.
  newhead.next = null;

  // Step 7: Return the new head of the rotated linked list.
  return head;
};

const arr = [1, 2, 3, 4, 5];
let head = ArrayToLinkedList(arr);
head = rotateLL(head, 2);
PrintLL(head);
