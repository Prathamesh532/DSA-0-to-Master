// Node class represents each node in the Binary Search Tree (BST)
class Node {
  constructor(data) {
    this.data = data;   // value stored in the node
    this.left = null;   // pointer to left child (smaller values)
    this.right = null;  // pointer to right child (greater values)
  }
}

// Function to find the minimum and maximum value in a BST
function findMinMax(root) {
  // If tree is empty, return nulls
  if (!root) return { min: null, max: null };

  let min = 0;
  let max = 0;

  // Start from root and keep going left to find minimum
  let tempL = root;
  while (tempL.left) {
    tempL = tempL.left;
  }
  min = tempL.data; // leftmost node value is the minimum

  // Start from root and keep going right to find maximum
  let tempR = root;
  while (tempR.right) {
    tempR = tempR.right;
  }
  max = tempR.data; // rightmost node value is the maximum

  return { max, min };
}

// ------------------------------------------------------------
// Build the BST (manually inserting nodes as per your diagram)
// ------------------------------------------------------------
const root = new Node(50);

root.left = new Node(45);
root.right = new Node(65);

// left subtree
root.left.left = new Node(30);
root.left.right = new Node(48);

// right subtree
root.right.left = new Node(61);
root.right.right = new Node(72);

// left-left subtree
root.left.left.left = new Node(21);
root.left.left.right = new Node(35);

// left-right subtree
root.left.right.left = new Node(47);
root.left.right.right = new Node(49);

// right-right subtree
root.right.right.right = new Node(88);

// ------------------------------------------------------------
// Print minimum and maximum values from the BST
// ------------------------------------------------------------
console.log(findMinMax(root)); 
