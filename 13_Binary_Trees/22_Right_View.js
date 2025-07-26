/**
 * Right View of a Binary Tree
 * ---------------------------
 * This code implements two methods to get the right view of a binary tree:
 *
 * ✅ Method 1: BFS (Level Order Traversal)
 * ✅ Method 2: DFS (Recursive Preorder Traversal - right-first)
 *
 * 🔹 Time Complexity: O(N)
 *     - Every node is visited once
 * 🔹 Space Complexity:
 *     - BFS: O(W), where W is the max width of the tree (queue size)
 *     - DFS: O(H), where H is the height of the tree (recursion depth)
 */

// Binary Tree Node definition
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// ✅ Approach 1: Right View using BFS (Level Order Traversal)
function rightView(root) {
  if (!root) return [];

  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let front = queue.shift();

      // Only capture the last node at each level
      if (i === levelSize - 1) result.push(front.data);

      if (front.left) queue.push(front.left);
      if (front.right) queue.push(front.right);
    }
  }

  return result;
}

// ✅ Approach 2: Right View using DFS (right-first traversal)
function rightView_(root) {
  let result = [];

  function dfs(node, level) {
    if (!node) return;

    // Add node if visiting level for the first time
    if (result.length === level) result.push(node.data);

    // Prioritize right subtree first
    dfs(node.right, level + 1);
    dfs(node.left, level + 1);
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

// 🧪 Output Right Views
console.log("Right View (BFS):", rightView(root)); // [10, 12, 15]
console.log("Right View (DFS):", rightView_(root)); // [10, 12, 15]
