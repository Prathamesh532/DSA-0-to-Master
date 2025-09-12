// Node class for the BST
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function balanceBST(root) {
  // Step 1: Store nodes in inorder traversal (sorted order for BST)
  let inorderArr = [];

  function inorder(node) {
    if (!node) return;
    inorder(node.left); // traverse left
    inorderArr.push(node.data); // store current node's data
    inorder(node.right); // traverse right
  }

  inorder(root);

  // Step 2: Build a Balanced BST from sorted inorder array
  function build(left, right) {
    if (left > right) return null;

    // Middle element makes root (to balance tree)
    let midIdx = Math.floor((left + right) / 2);
    let node = new Node(inorderArr[midIdx]);

    // Recursively build left and right subtrees
    node.left = build(left, midIdx - 1);
    node.right = build(midIdx + 1, right);

    return node; // return balanced subtree
  }

  return build(0, inorderArr.length - 1);
}

// Example: Unbalanced BST
let root = new Node(1);
root.right = new Node(2);
root.right.right = new Node(3);
root.right.right.right = new Node(4);

console.log("Original BST (Unbalanced):");
console.log(JSON.stringify(root));

// Balance the BST
let balancedRoot = balanceBST(root);

console.log("Balanced BST:");
console.log(JSON.stringify(balancedRoot));
