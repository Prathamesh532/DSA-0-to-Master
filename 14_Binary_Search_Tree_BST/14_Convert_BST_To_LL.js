/**
 * Description:
 * Convert a Binary Search Tree (BST) into a sorted Linked List.
 * Each node’s right pointer should point to the next node in sorted order.
 * Each node’s left pointer should be null.
 *
 * Intuition:
 * - An inorder traversal (Left → Node → Right) of a BST gives nodes in sorted order.
 * - We maintain a `prev` pointer to connect the last visited node to the current one.
 * - The first visited node (smallest) becomes the head of the linked list.
 *
 * Complexity:
 * Time:  O(n)   -> Each node is visited once.
 * Space: O(h)   -> Recursion stack, where h is the height of the tree (O(log n) for balanced, O(n) for skewed).
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function convertBSTToLL(root) {
  let prev = null;
  let head = null;

  function dfs(node) {
    if (!node) return;

    // Traverse left subtree
    dfs(node.left);

    // Process current node
    if (prev === null) {
      head = node; // First node becomes head
    } else {
      prev.right = node; // Link prev -> current
    }
    node.left = null; // Set left to null
    prev = node; // Move prev forward

    // Traverse right subtree
    dfs(node.right);
  }

  dfs(root);
  return head;
}

// ---------------- Test Case ----------------
let root = new Node(8);
root.left = new Node(4);
root.right = new Node(12);
root.left.left = new Node(2);
root.left.right = new Node(6);
root.right.left = new Node(10);
root.right.right = new Node(14);

let head = convertBSTToLL(root);

// Print the Linked List
let curr = head;
let result = [];
while (curr) {
  result.push(curr.data);
  curr = curr.right;
}
console.log("Linked List:", result.join(" → "));
// Expected Output: 2 → 4 → 6 → 8 → 10 → 12 → 14
