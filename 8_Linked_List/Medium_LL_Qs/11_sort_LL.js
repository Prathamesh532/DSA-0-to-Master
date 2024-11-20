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
// sort the linked list
const SortLL = (head) => {
  if (head == null || head.next == null) return head;

  let temp = head;
  let list = [];

  while (temp !== null) {
    list.push(temp.data);
    temp = temp.next;
  }

  list.sort((a, b) => a - b);
  let newHead = ArraytoLL(list);

  return newHead;
};

// find the middle of the linked list
const findMiddle = (head) => {
  if (head == null || head.next == null) return head;

  let slow = head;
  let fast = head.next.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// merge the 2 LL
const merge2SortLL = (list1, list2) => {
  let dummy = new Node(-1);
  let temp = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.data <= list2.data) {
      temp.next = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      list2 = list2.next;
    }
    temp = temp.next;
  }

  if (list1 !== null) temp.next = list1;
  else temp.next = list2;

  return dummy.next;
};

// using merge sort
const SortLL_optimal = (head) => {
  if (head == null || head.next == null) return head;

  let middle = findMiddle(head);

  let left = head;
  let right = middle.next;
  middle.next = null;

  left = SortLL_optimal(head);
  right = SortLL_optimal(right);

  return merge2SortLL(left, right);
};

// Example Usage
let arr = [5, 4, 3, 2, 1]; // Example array
let head = ArraytoLL(arr); // Convert array to linked list
head = SortLL_optimal(head);
PrintLL(head);
