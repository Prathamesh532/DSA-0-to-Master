// Node structure for the BST
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Function to find the Ceil of x in a BST
 * Ceil(x) = the smallest value in the BST which is >= x
 */
function findCeil(root, x) {
  let ceil = -1; // if no ceil exists, return -1

  while (root !== null) {
    if (root.data === x) {
      // Exact match → this is the ceil
      return root.data;
    } else if (x > root.data) {
      // Current node is smaller than x → can't be ceil
      // Move to the right (larger values) to find a valid ceil
      root = root.right;
    } else {
      // Current node is greater than x → possible ceil
      // But there might be a smaller valid ceil in the left subtree
      ceil = root.data;
      root = root.left;
    }
  }

  return ceil;
}

/**
 * Function to find the Floor of x in a BST
 * Floor(x) = the largest value in the BST which is <= x
 */
function findFloor(root, x) {
  let floor = -1; // if no floor exists, return -1

  while (root !== null) {
    if (root.data === x) {
      // Exact match → this is the floor
      return root.data;
    } else if (x > root.data) {
      // Current node is smaller than x → possible floor
      // But there might be a larger valid floor in the right subtree
      floor = root.data;
      root = root.right;
    } else {
      // Current node is greater than x → too large to be floor
      // Move left to try smaller values
      root = root.left;
    }
  }

  return floor;
}

// Constructing the BST
const root = new Node(50);

root.left = new Node(45);
root.right = new Node(65);

// Left subtree of 45
root.left.left = new Node(30);
root.left.right = new Node(48);

// Right subtree of 65
root.right.left = new Node(61);
root.right.right = new Node(72);

// Deeper left subtree
root.left.left.left = new Node(21);
root.left.left.right = new Node(35);

// Deeper right subtree of 48
root.left.right.left = new Node(47);
root.left.right.right = new Node(49);

// Right-right subtree of 72
root.right.right.right = new Node(88);

console.log(findCeil(root));
console.log(findFloor(root));
