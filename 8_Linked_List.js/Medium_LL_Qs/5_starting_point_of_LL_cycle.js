// Node class to define the structure of each node in the doubly linked list
class Node {
  constructor(data, next = null) {
    this.data = data; // Value of the node
    this.next = next; // Pointer to the next node in the list
  }
}

/* ************************ */
/* Code Function Here */
// brute force
const startingPointLL = (head) => {
  // If the list is empty or has only one node, there can't be a loop
  if (head == null || head.next == null) return null;

  // Create a HashMap to store visited nodes
  let hashMap = new Map();
  let temp = head;

  // Traverse the linked list
  while (temp !== null) {
    // If the node is already in the HashMap, it is the starting point of the loop
    if (hashMap.has(temp)) return temp;
    // Mark the current node as visited by adding it to the HashMap
    hashMap.set(temp, true);
    // Move to the next node
    temp = temp.next;
  }

  // If no loop is detected, return null
  return null;
};

// Function to find the starting point of the loop using Tortoise and Hare (Floyd’s Cycle Detection - optimal approach)
const startingPointLL_optimal = (head) => {
  // Initialize two pointers, slow (moves 1 step) and fast (moves 2 steps)
  let slow = head;
  let fast = head;

  // Traverse the list with slow and fast pointers to detect a cycle
  while (fast !== null && fast.next !== null) {
    slow = slow.next; // Move slow by 1 step
    fast = fast.next.next; // Move fast by 2 steps

    // If slow and fast pointers meet, a cycle is detected
    if (slow === fast) {
      // Reset slow pointer to the head to find the starting point of the loop
      slow = head;
      // Move both pointers one step at a time until they meet again
      // The meeting point will be the starting point of the loop
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow; // This is the starting node of the loop
    }
  }

  // If no loop is detected, return null
  return null;
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
fivth.next = second;

let res = startingPointLL_optimal(first);
console.log(res);
