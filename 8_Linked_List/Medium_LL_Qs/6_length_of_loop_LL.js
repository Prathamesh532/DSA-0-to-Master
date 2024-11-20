// Node class to define the structure of each node in the doubly linked list
class Node {
  constructor(data, next = null) {
    this.data = data; // Value of the node
    this.next = next; // Pointer to the next node in the list
  }
}

/* ************************ */
/* Code Function Here */
// brute force -- using Hashing
const lengthOfLoopInLL = (head) => {
  // Create a HashMap to store visited nodes and their "time" or index
  let hashMap = new Map();
  let temp = head;
  let timer = 0;

  // Traverse the linked list
  while (temp !== null) {
    // If the current node is already in the HashMap, a loop is detected
    // Calculate the length of the loop by subtracting the stored time from the current time
    if (hashMap.has(temp)) {
      return timer - hashMap.get(temp);
    }
    // Mark the current node with its time in the HashMap
    hashMap.set(temp, timer++);
    // Move to the next node
    temp = temp.next;
  }

  // If no loop is detected, return 0
  return 0;
};

// Function to find the length of the loop in a linked list using Tortoise and Hare (Optimal approach)
const lengthOfLoopInLL_optimal = (head) => {
  // Initialize two pointers, slow (moves 1 step) and fast (moves 2 steps)
  let slow = head;
  let fast = head;

  // Traverse the list with slow and fast pointers to detect a cycle
  while (fast !== null && fast.next !== null) {
    slow = slow.next; // Move slow by 1 step
    fast = fast.next.next; // Move fast by 2 steps

    // If slow and fast pointers meet, a cycle is detected
    if (slow === fast) {
      // Start counting the length of the cycle
      let cnt = 1;
      fast = fast.next;
      // Move fast pointer one step at a time until it meets slow again
      while (slow !== fast) {
        cnt++;
        fast = fast.next;
      }
      return cnt; // This is the length of the loop
    }
  }

  // If no loop is detected, return 0
  return 0;
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
fivth.next = third;

let res = lengthOfLoopInLL_optimal(first);
console.log(res);
