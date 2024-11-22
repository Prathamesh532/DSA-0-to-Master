class Node {
  constructor(data, next = null, bottom = null) {
    this.data = data;
    this.next = next;
    this.bottom = bottom;
  }
}

// Print Function
const PrintLL = (head) => {
  let temp = head;
  //   let LL = [];
  while (temp !== null) {
    // LL.push(temp.data);
    console.log(temp.data);
    temp = temp.bottom;
  }
  console.log();
};

const printLLHasBottomChild = (head, depth = 0) => {
  while (head !== null) {
    console.log(head.data);

    if (head.bottom) {
      process.stdout.write(" -> ");
      printLLHasBottomChild(head.bottom, depth + 1);
    }

    if (head.next) {
      console.log();
      for (let i = 0; i < depth; ++i) {
        console.log("| ");
      }
    }
    head = head.next;
  }
};

// Array --> LL
const ArrayToLL = (arr) => {
  if (arr.length === 0) return null;
  const head = new Node(arr[0]);
  let currentNode = head;

  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(arr[i]);
    currentNode.bottom = newNode;
    currentNode = newNode;
  }

  return head;
};

/* ************************ */
/* Code Function Here */
//brute force --->
const flatLL = (head) => {
  // If the list is empty or has only one node, return the head as is
  if (head == null || head.next == null) return head;

  let temp = head; // Temporary pointer to traverse the list
  let list = []; // Array to store all node data

  // Traverse through the linked list and collect the data from each node
  while (temp !== null) {
    list.push(temp.data); // Add the current node's data to the list

    // Traverse the bottom list (if it exists) and add its data
    let bottomNode = temp.bottom;
    while (bottomNode !== null) {
      list.push(bottomNode.data);
      bottomNode = bottomNode.bottom; // Move to the next bottom node
    }

    temp = temp.next; // Move to the next node in the main list
  }

  // Sort the collected data in ascending order
  list.sort((a, b) => a - b);

  // Convert the sorted list back into a linked list and return the head of the new list
  return ArrayToLL(list);
};

//optimal approach

// Function to merge two sorted linked lists (used in the optimal approach)
const mergeLL = (l1, l2) => {
  let dummyNode = new Node(-1); // Dummy node to start the merged list
  let final = dummyNode; // Pointer to build the merged list

  // Traverse both lists and merge them by comparing node values
  while (l1 !== null && l2 !== null) {
    if (l1.data < l2.data) {
      final.bottom = l1; // Attach the smaller node (l1) to the merged list
      final = l1; // Move the final pointer to the newly added node
      l1 = l1.bottom; // Move to the next node in l1's bottom list
    } else {
      final.bottom = l2; // Attach the smaller node (l2) to the merged list
      final = l2; // Move the final pointer to the newly added node
      l2 = l2.bottom; // Move to the next node in l2's bottom list
    }
    final.next = null; // Set the next pointer to null (because we are working with the bottom list)
  }

  // If there are remaining nodes in l1, attach them to the merged list
  if (l1) {
    final.bottom = l1;
  } else {
    final.bottom = l2; // If there are remaining nodes in l2, attach them
  }

  // Return the merged list starting from dummyNode.bottom (skipping the dummy node)
  if (dummyNode.bottom) dummyNode.bottom.next = null;

  return dummyNode.bottom;
};

const flatLL_optimal = (head) => {
  // Base case: if the list is empty or has only one node, return it as is
  if (head == null || head.next == null) return head;

  // Recursively flatten the next part of the list
  let mergeHead = flatLL_optimal(head.next);

  // Merge the current head's list with the flattened next part of the list
  head = mergeLL(head, mergeHead);

  // Return the fully merged and flattened list
  return head;
};

let head = new Node(5);
head.bottom = new Node(14);

head.next = new Node(10);
head.next.bottom = new Node(4);

head.next.next = new Node(12);
head.next.next.bottom = new Node(20);
head.next.next.bottom.bottom = new Node(13);

head.next.next.next = new Node(7);
head.next.next.next.bottom = new Node(17);

console.log("Original Nested Linked List:");
printLLHasBottomChild(head);

console.log("\nFlattened Linked List:");
let res = flatLL_optimal(head);
PrintLL(res);
