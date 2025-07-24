/**
 * Given a binary tree, the task is to find the boundary nodes of the binary tree Anti-Clockwise starting from the root.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Check if node is a leaf
function isLeaf(node) {
  return !node.left && !node.right;
}

// Get the left boundary (excluding leaf nodes)
// Time Complexity --> O(H)
function leftNode(root) {
  let curr = root.left;
  let ans = [];

  while (curr) {
    if (!isLeaf(curr)) ans.push(curr.data);
    if (curr.left) curr = curr.left;
    else curr = curr.right;
  }

  return ans;
}

// Get all leaf nodes (left to right)
// Time Complexity --> O(N) worst case vist all nodes
function leafNode(root) {
  let res = [];

  function dfs(node) {
    if (!node) return;
    if (isLeaf(node)) {
      res.push(node.data);
      return;
    }
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return res;
}

// Get the right boundary (excluding leaf nodes)
// Time Complexity --> O(H)
function rightNode(root) {
  let curr = root.right;
  let ans = [];

  while (curr) {
    if (!isLeaf(curr)) ans.push(curr.data);
    if (curr.right) curr = curr.right;
    else curr = curr.left;
  }

  return ans.reverse(); // bottom-up
}

// Boundary traversal function
// Time complexity --> O(2Height) + O(Nodes)
// space complexity --> O(N+H)
function boundaryTraversal(root) {
  if (!root) return [];

  // If root is a leaf, no need to add again later
  let result = isLeaf(root) ? [] : [root.data];

  // Add left boundary (excluding leaves)
  result = result.concat(leftNode(root));

  // Add all leaf nodes
  result = result.concat(leafNode(root));

  // Add right boundary (excluding leaves)
  result = result.concat(rightNode(root));

  return result;
}

// ✅ Example tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log("Left Boundary:", leftNode(root)); // [2]
console.log("Leaf Nodes:", leafNode(root)); // [4, 5, 6, 7]
console.log("Right Boundary:", rightNode(root)); // [3]
console.log("Boundary Traversal:", boundaryTraversal(root)); // [1, 2, 4, 5, 6, 7, 3]
