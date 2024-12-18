// Node class to define the structure of each node in the singly linked list
class Node {
  constructor(data, next = null) {
    this.data = data; // Value of the node
    this.next = next; // Pointer to the next node in the list
  }
}

// Function to print all elements of a singly linked list starting from the head
const PrintLL = (head) => {
  let temp = head; // Start with the head node
  while (temp != null) {
    // Traverse until the end of the list
    console.log(temp.data); // Print the current node's data
    temp = temp.next; // Move to the next node
  }
};

// Function to convert a 2D array into a singly linked list
const ArrayToLL = (arr) => {
  if (arr.length === 0) return null; // Edge case: if the array is empty, return null

  // Flatten the 2D array into a 1D array
  let list = arr.flatMap((item) => item);

  // Initialize the head node with the first element of the array
  const head = new Node(list[0]);
  let currentNode = head; // Start with the head node

  // Loop through the remaining elements and create nodes
  for (let i = 1; i < list.length; i++) {
    let newNode = new Node(list[i]); // Create a new node for each element
    currentNode.next = newNode; // Link the current node to the new node
    currentNode = newNode; // Move currentNode to the new node
  }

  return head; // Return the head of the linked list
};

/* ************************ */
/* Code Functions for Merging Linked Lists */

// Brute force approach ---> O(N log N) time complexity, O(N) space complexity
const mergeKLists = (lists) => {
  let nodes = []; // Array to hold all node values
  for (let lst of lists) {
    while (lst) {
      nodes.push(lst.val); // Collect all values from the lists
      lst = lst.next; // Move to the next node
    }
  }
  nodes.sort((a, b) => a - b); // Sort all values in ascending order

  // Create a new sorted linked list
  let res = new ListNode(0);
  let cur = res;
  for (let node of nodes) {
    cur.next = new ListNode(node); // Create a node for each value
    cur = cur.next; // Move to the next node
  }
  return res.next; // Return the head of the merged sorted list
};

// Optimal approach ---> O(N log K) time complexity
const mergeLists = (L1, L2) => {
  const dummyNode = new ListNode(-1); // Temporary head for merging
  let current = dummyNode;

  // Merge the two lists in sorted order
  while (L1 && L2) {
    if (L1.val < L2.val) {
      current.next = L1; // Add the smaller node to the result
      L1 = L1.next; // Move to the next node in L1
    } else {
      current.next = L2; // Add the smaller node to the result
      L2 = L2.next; // Move to the next node in L2
    }
    current = current.next; // Move to the next node in the result
  }

  // Attach any remaining nodes from L1 or L2
  while (L1) {
    current.next = L1;
    L1 = L1.next;
    current = current.next;
  }

  while (L2) {
    current.next = L2;
    L2 = L2.next;
    current = current.next;
  }

  return dummyNode.next; // Return the merged list starting from the first node
};

const mergeKLists_optimal = (lists) => {
  if (!lists || lists.length === 0) return null; // Edge case: no lists to merge

  // Keep merging lists in pairs until only one list remains
  while (lists.length > 1) {
    const mergedList = [];
    for (let i = 0; i < lists.length; i += 2) {
      let l1 = lists[i]; // First list
      let l2 = i + 1 < lists.length ? lists[i + 1] : null; // Second list (if it exists)
      mergedList.push(mergeLists(l1, l2)); // Merge the two lists and add to the mergedList
    }
    lists = mergedList; // Update lists with merged lists
  }
  return lists[0]; // Return the final merged list
};

/* ************************ */
/* Example Usage */

// Example 2D array input
const arr2D = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];

// Convert the 2D array into a singly linked list
const head = ArrayToLL(arr2D);

// Print the linked list created from the array
PrintLL(head);
