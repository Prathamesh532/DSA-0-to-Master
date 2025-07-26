/**
 * Left View of a Binary Tree
 * ---------------------------
 * This script implements two approaches to find the left view of a binary tree:
 * 1. BFS (Level Order Traversal)
 * 2. DFS (Recursive Preorder Traversal - left-first)
 *
 * Time Complexity for both: O(N)
 *   - where N is the number of nodes in the tree (each node is visited once)
 *
 * Space Complexity:
 *   - BFS: O(W), where W is the maximum width (queue size in worst case)
 *   - DFS: O(H), where H is the height of the tree (recursion stack depth)
 */

// Binary tree node definition
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// ✅ Approach 1: Left View using BFS (Level Order Traversal)
function leftView(root) {
  if (!root) return [];

  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let front = queue.shift();

      // Only add the first node at each level
      if (i === 0) result.push(front.data);

      if (front.left) queue.push(front.left);
      if (front.right) queue.push(front.right);
    }
  }

  return result;
}

// ✅ Approach 2: Left View using DFS (Recursive Preorder: root-left-right)
function leftView_(root) {
  let result = [];

  function dfs(node, level) {
    if (!node) return;

    // If we're visiting a level for the first time
    if (result.length === level) result.push(node.data);

    dfs(node.left, level + 1); // Prioritize left child
    dfs(node.right, level + 1);
  }

  dfs(root, 0);
  return result;
}

// 🔁 Sample Tree for Testing:
//         10
//       /    \
//      8      12
//     / \    /  \
//    3   5  11   15

const root = new Node(10);
root.left = new Node(8);
root.right = new Node(12);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(11);
root.right.right = new Node(15);

// Output Left Views
console.log("Left View (BFS):", leftView(root)); // [10, 8, 3]
console.log("Left View (DFS):", leftView_(root)); // [10, 8, 3]
