class Node {
  constructor(data, next = null, random = null) {
    this.data = data;
    this.next = next;
    this.random = random;
  }
}

// Print Function
function printClonedLinkedList(head) {
  let temp = head;
  while (temp !== null) {
    console.log(
      `Data: ${temp.data}` +
        (temp?.random !== null
          ? `, Random: ${temp.random.data}`
          : `, Random: null`)
    );
    temp = temp.next;
  }
}

/* ************************ */
/* Code Function Here */
// brute force ---> O(2N) , space complexity = O(N) + O(N) --> hashmap and cloneNodes
const cloneLL = (head) => {
  if (head == null) return null; // If the list is empty, return null

  let hashMap = new Map(); // Create a hash map to store original-to-clone node mapping
  let temp = head;

  // First pass: Create a clone of each node and store it in the hashMap
  while (temp !== null) {
    let cloneNode = new Node(temp.data); // Create a clone of the current node
    hashMap.set(temp, cloneNode); // Map the original node to the cloned node
    temp = temp.next; // Move to the next node
  }

  temp = head;

  // Second pass: Set the `next` and `random` pointers for the cloned nodes
  while (temp !== null) {
    let cloneNode = hashMap.get(temp); // Get the cloned node from the hash map
    cloneNode.next = temp.next ? hashMap.get(temp.next) : null; // Set the `next` pointer
    cloneNode.random = temp.random ? hashMap.get(temp.random) : null; // Set the `random` pointer
    temp = temp.next; // Move to the next node
  }

  return hashMap.get(head); // Return the head of the cloned list
};

// Optimal approach ---> O(3N)
const cloneLL_optimal = (head) => {
  if (head == null) return null; // If the list is empty, return null

  let temp = head;

  // Step 1: Insert clone nodes in between original nodes
  while (temp !== null) {
    let nextNode = temp.next; // Store the next node of the original list
    let cloneNode = new Node(temp.data); // Create a clone of the current node
    temp.next = cloneNode; // Link the current node to its clone
    cloneNode.next = nextNode; // Link the clone to the next original node
    temp = nextNode; // Move to the next original node
  }

  temp = head;

  // Step 2: Connect the `random` pointers for clone nodes
  while (temp !== null) {
    let cloneNode = temp.next; // Clone node is always `temp.next`
    if (temp.random) {
      cloneNode.random = temp.random.next; // Link the clone's `random` to the cloned random node
    } else {
      cloneNode.random = null; // If the original node's `random` is null, set clone's `random` to null
    }
    temp = temp.next.next; // Move to the next original node
  }

  temp = head;

  let dummyNode = new Node(-1); // Dummy node to help extract the cloned list
  let res = dummyNode;

  // Step 3: Separate the original and cloned lists
  while (temp !== null) {
    let cloneNode = temp.next; // Clone node is `temp.next`
    res.next = cloneNode; // Add the clone node to the result list
    temp.next = temp.next.next; // Restore the `next` pointer of the original node
    res = res.next; // Move the result pointer
    temp = temp.next; // Move the original pointer
  }

  return dummyNode.next; // Return the head of the cloned list
};

// Example Usages
let head = new Node(7);
head.next = new Node(14);
head.next.next = new Node(21);
head.next.next.next = new Node(28);

// Assigning random pointers
head.random = head.next.next;
head.next.random = head;
head.next.next.random = head.next.next.next;
head.next.next.next.random = head.next;

console.log("Original Linked List with Random Pointers:");
printClonedLinkedList(head);

let res = cloneLL_optimal(head);
console.log("\nCloned Linked List with Random Pointers:");
printClonedLinkedList(res);
