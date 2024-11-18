// Node class to define the structure of each node in the doubly linked list
class Node {
  constructor(data, next = null) {
    this.data = data; // Value of the node
    this.next = next; // Pointer to the next node in the list
  }
}

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
// brute force ---> O(head1 , head2)  , S.C = O(N)
// Approach 1: Using HashMap
// Time Complexity: O(n1 + n2), Space Complexity: O(n1)
// The idea is to store all nodes of the first linked list in a hash map
// and then check for each node of the second linked list if it exists in the map.
const findIntersectionInLL = (head1, head2) => {
  if (head1 == null || head2 == null) return null; // No intersection if either list is null

  let temp1 = head1;
  let temp2 = head2;

  let hashMap = new Map(); // To store nodes of the first linked list

  // Traverse the first linked list and store each node in the hash map
  while (temp1 !== null) {
    hashMap.set(temp1, true);
    temp1 = temp1.next;
  }

  // Traverse the second linked list and check if any node exists in the hash map
  while (temp2 !== null) {
    if (hashMap.has(temp2)) return temp2; // Intersection found
    temp2 = temp2.next;
  }

  return null; // No intersection
};

// Better Approach: Using Length Difference
// Time Complexity: O(n1 + n2), Space Complexity: O(1)
// The idea is to calculate the lengths of both lists, align the longer list with the shorter list,
// and then move both pointers together to find the intersection point.
const intersection = (small, large, d) => {
  // Move the pointer in the longer list by 'd' steps to align both lists
  while (d) {
    d--;
    large = large.next;
  }

  // Traverse both lists together until we find the intersection point
  while (small !== large) {
    small = small.next;
    large = large.next;
  }

  return small; // Returns the intersection node or null if no intersection
};

const findIntersectionInLL_better = (head1, head2) => {
  if (head1 == null || head2 == null) return null; // No intersection if either list is null

  let temp1 = head1;
  let temp2 = head2;

  let n1 = 0;
  let n2 = 0;

  // Calculate the length of the first linked list
  while (temp1 !== null) {
    n1++;
    temp1 = temp1.next;
  }

  // Calculate the length of the second linked list
  while (temp2 !== null) {
    n2++;
    temp2 = temp2.next;
  }

  // Use the length difference to align both lists and find the intersection
  if (n1 < n2) {
    return intersection(head1, head2, n2 - n1);
  } else {
    return intersection(head2, head1, n1 - n2);
  }
};

// Optimal Approach: Two-Pointer Technique
// Time Complexity: O(n1 + n2), Space Complexity: O(1)
// The idea is to traverse both lists using two pointers and swap lists when reaching the end.
// Both pointers will meet at the intersection or both will become null if there's no intersection.
const findIntersectionInLL_opimal = (head1, head2) => {
  if (head1 == null || head2 == null) return null; // No intersection if either list is null

  let t1 = head1;
  let t2 = head2;

  // Traverse both lists
  while (t1 !== t2) {
    // Move to the next node, or switch to the other list's head when reaching the end
    t1 = t1 ? t1.next : head2;
    t2 = t2 ? t2.next : head1;
  }

  return t1; // Returns the intersection node or null if no intersection
};

// Example Usage
let arr1 = [4, 1, 8, 4, 5]; // Example array
let arr2 = [5, 6, 1, 8, 4, 5];
let head1 = ArraytoLL(arr1); // Convert array to linked list
let head2 = ArraytoLL(arr2);

// Manually creating an intersection for demonstration
// Let’s make the second list intersect at the node with value 8 in the first list
let temp1 = head1;
let temp2 = head2;

// Move temp1 to the node with value 8
while (temp1 && temp1.data !== 8) {
  temp1 = temp1.next;
}

// Move temp2 to the last node
while (temp2 && temp2.next) {
  temp2 = temp2.next;
}

// Make the last node of the second list point to the intersection node
if (temp2) temp2.next = temp1;

let res = findIntersectionInLL_opimal(head1, head2);
console.log(res);
