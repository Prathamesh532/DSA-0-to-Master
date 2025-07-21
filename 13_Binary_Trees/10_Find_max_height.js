/**
 * 🔍 Problem: Find the Height (or Max Depth) of a Binary Tree
 * -----------------------------------------------------------
 * The height of a binary tree is the number of nodes along the longest
 * path from the root node down to the farthest leaf node.
 *
 * 📌 This implementation shows two methods:
 *    1. Recursive Postorder Traversal (DFS)
 *    2. Level-Order Traversal (BFS)
 *
 * 🌲 Example Tree:
 *         4
 *        / \
 *       2   5
 *      / \
 *     1   3
 *
 * ✅ Expected Height: 3
 */

class Node {
  constructor(data) {
    this.data = data; // value of the node
    this.left = null; // left child
    this.right = null; // right child
  }
}

// ✅ Approach 1: Recursive Postorder Traversal (DFS)
// Time: O(N), Space: O(H) where H is the height (recursion stack)
function findMaxHeight(root) {
  if (!root) return 0;

  // Recursively calculate the height of left and right subtrees
  let leftSubTreeHeight = findMaxHeight(root.left);
  let rightSubTreeHeight = findMaxHeight(root.right);

  // Height is 1 (current node) + max of left and right subtree height
  return Math.max(leftSubTreeHeight, rightSubTreeHeight) + 1;
}

// ✅ Approach 2: Level-Order Traversal (BFS)
// Time: O(N), Space: O(W) where W is the max width of the tree
function findMaxHeight_levelOrder(root) {
  if (!root) return 0;

  let height = 0;
  let queue = [root]; // start with root node

  while (queue.length > 0) {
    let levelSize = queue.length;

    // Process all nodes at the current level
    for (let i = 0; i < levelSize; i++) {
      let front = queue.shift();

      if (front.left) queue.push(front.left);
      if (front.right) queue.push(front.right);
    }

    // Increment height after processing one full level
    height++;
  }

  return height;
}

// 🔧 Test Tree
const root = new Node(4);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(3);

// ✅ Output both heights
console.log("Height (Recursive DFS):", findMaxHeight(root)); // Output: 3
console.log("Height (Level Order):", findMaxHeight_levelOrder(root)); // Output: 3
