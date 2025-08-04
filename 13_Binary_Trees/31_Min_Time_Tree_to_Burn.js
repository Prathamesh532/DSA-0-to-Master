// 🔥 Minimum Time to Burn a Binary Tree from a Leaf Node

// Definition of a binary tree node
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * Function to calculate the minimum time required to burn the entire binary tree
 * starting from a given leaf node.
 *
 * 🔍 Approach:
 * 1. Traverse the tree to build a map of each node's parent.
 * 2. Find the node where the fire starts using its value.
 * 3. Use BFS (level-order traversal) starting from the burning node.
 *    - At each second, fire spreads to left, right, and parent nodes.
 *    - Count the number of BFS levels to determine the total time.
 *
 * ⏱️ Time Complexity: O(n)
 * 🗂️ Space Complexity: O(n)
 *    - For parent mapping, visited set, and BFS queue.
 *
 * @param {TreeNode} root - The root of the binary tree
 * @param {number} startVal - The value of the node where the fire starts
 * @returns {number} - Minimum time to burn the entire tree
 */
function minTimeToBurnTree(root, startVal) {
  const parentMap = new Map(); // Map to store parent references for each node
  let startNode = null; // This will point to the node where fire starts

  // Step 1: DFS to build parent references and find the start node
  function mapParents(node, parent) {
    if (!node) return;

    // Store parent reference
    if (parent) {
      parentMap.set(node, parent);
    }

    // If current node is the fire start node, store it
    if (node.val === startVal) {
      startNode = node;
    }

    // Recurse for left and right children
    mapParents(node.left, node);
    mapParents(node.right, node);
  }

  // Build parent mapping
  mapParents(root, null);

  // Step 2: BFS starting from the startNode
  let queue = [startNode]; // BFS queue initialized with the fire start node
  let visited = new Set(); // To track already burned nodes
  visited.add(startNode);
  let time = 0; // Counter to track time in seconds

  // BFS traversal
  while (queue.length > 0) {
    let size = queue.length;
    let didSpread = false; // Flag to track if fire spread this second

    // Process current level
    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      // Get all adjacent nodes (left, right, and parent)
      let neighbors = [node.left, node.right, parentMap.get(node)];
      for (let neighbor of neighbors) {
        if (neighbor && !visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
          didSpread = true;
        }
      }
    }

    // If fire spread to new nodes, increase time
    if (didSpread) {
      time++;
    }
  }

  return time;
}

// 🌳 Example Usage:

// Constructing the binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Start burning from node 5
console.log(minTimeToBurnTree(root, 5)); // Output: 4
