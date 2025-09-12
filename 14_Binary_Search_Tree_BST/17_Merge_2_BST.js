class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function mergeBST(root1, root2) {
  // step: 1 -> create a array of nodes from inorder travseral for both BSTs
  let inorderArr1 = [];
  let inorderArr2 = [];

  // Left -> Node -> right
  function inorder(node, arr) {
    // base case
    if (!node) return;

    // go to left
    inorder(node.left, arr);

    // proccess node
    arr.push(node);

    // go to right
    inorder(node.right, arr);
  }

  inorder(root1, inorderArr1);
  inorder(root2, inorderArr2);

  // step: 2 -> merge 2 sorted arrays into one sorted array
  let mergedArr = [...inorderArr1, ...inorderArr2].sort(
    (a, b) => a.data - b.data
  );

  // step: 3 -> build a BST from merged array
  function build(left, right) {
    if (left > right) return null;

    // Middle element makes root (to balance tree)
    let midIdx = Math.floor((left + right) / 2);
    let node = new Node(mergedArr[midIdx].data);

    // Recursively build left and right subtrees
    node.left = build(left, midIdx - 1);
    node.right = build(midIdx + 1, right);

    return node; // return balanced subtree
  }

  return build(0, mergedArr.length - 1);
}

const root = new Node(5);
root.left = new Node(3);
root.right = new Node(7);
root.left.left = new Node(2);
root.left.right = new Node(4);
root.right.left = new Node(6);
root.right.right = new Node(8);

const root2 = new Node(2);
root2.left = new Node(1);
root2.right = new Node(4);
root2.left.left = new Node(0);
root2.left.right = new Node(2);
root2.right.left = new Node(3);
root2.right.right = new Node(5);

console.log(mergeBST(root, root2));

// Convert BST --> LL
// Convert BST --> DLL
// Merge 2 LL/DLL
// Build Balanced BT --> DLL