// Node class to define the structure of each node in the doubly linked list
class Node {
  constructor(data, next = null) {
    this.data = data; // Value of the node
    this.next = next; // Pointer to the next node in the list
  }
}

/* ************************ */
/* Code Function Here */
// Js - Brute Force ---> Time Complexity - O(N) and Space Complexity - O(1)
const DetectLoopInLL = (head) => {
  // If the list is empty or has only one node, there can't be a loop
  if (head == null || head.next == null) return false;

  // Initialize a temporary pointer to traverse the list
  let temp = head;
  // Create a HashMap to store visited nodes
  let hashMap = new Map();

  // Traverse the linked list
  while (temp !== null) {
    // If the current node is already in the HashMap, a loop exists
    if (hashMap.has(temp)) {
      return true;
    }
    // Mark the current node as visited by adding it to the HashMap
    hashMap.set(temp, true);
    // Move to the next node
    temp = temp.next;
  }
  // If no loop is detected, return false
  return false;
};

// Detect loop in a linked list using Tortoise and Hare algorithm (Optimal approach)
const DetectLoopInLL_optimal = (head) => {
  // If the list is empty or has only one node, there can't be a loop
  if (head == null || head.next == null) return false;

  // Initialize two pointers, slow (moves 1 step) and fast (moves 2 steps)
  let slow = head;
  let fast = head;

  // Traverse the list with slow and fast pointers
  while (fast !== null && fast.next !== null) {
    // Move slow by 1 step
    slow = slow.next;
    // Move fast by 2 steps
    fast = fast.next.next;
    // If slow and fast pointers meet, a loop is detected
    if (slow === fast) return true;
  }

  // If no loop is detected, return false
  return false;
};

const first = new Node(10);
const second = new Node(20);
const third = new Node(30);
const fourth = new Node(40);
const fivth = new Node(50);

first.next = second;
second.next = third;
third.next = fourth;
fourth.next = fivth;
fivth.next = null;

let res = DetectLoopInLL_optimal(first);
console.log(res);
