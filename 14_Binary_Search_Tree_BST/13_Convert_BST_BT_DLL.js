// Node class for Binary Tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Description:
 * Convert a Binary Tree to a Doubly Linked List (DLL) in-place.
 * The left pointer will act as `prev`, and the right pointer will act as `next`.
 * The DLL should maintain the in-order traversal order of the tree.
 *
 * Intuition:
 * - Perform an inorder traversal (Left → Root → Right).
 * - Keep track of the previously visited node (`prev`).
 * - Link the current node's left pointer to `prev` and `prev.right` to current.
 * - Move `prev` forward.
 * - The head of DLL will be the first node visited (smallest).
 *
 * Time Complexity: O(N)  (each node is visited once)
 * Space Complexity: O(H) where H is tree height (due to recursion stack)
 */

function convertTODLL(root) {
  let prev = null;
  let head = null;

  function inorder(node) {
    if (!node) return;

    // left
    inorder(node.left);

    // process node
    if (prev === null) {
      head = node; // first node = head
    } else {
      node.left = prev;
      prev.right = node;
    }
    prev = node;

    // right
    inorder(node.right);
  }

  inorder(root);
  return head;
}

// ----------- Test Case -----------

// Tree structure:
//        10
//      /    \
//     5      20
//    / \    /
//   2   8  15
let root = new Node(10);
root.left = new Node(5);
root.right = new Node(20);
root.left.left = new Node(2);
root.left.right = new Node(8);
root.right.left = new Node(15);

let head = convertTODLL(root);

// Print DLL forward
let curr = head;
let dllForward = [];
while (curr) {
  dllForward.push(curr.data);
  if (!curr.right) break; // stop at tail
  curr = curr.right;
}
console.log("DLL Forward:", dllForward.join(" <-> "));

// Print DLL backward (to verify double links)
let dllBackward = [];
while (curr) {
  dllBackward.push(curr.data);
  curr = curr.left;
}
console.log("DLL Backward:", dllBackward.join(" <-> "));
