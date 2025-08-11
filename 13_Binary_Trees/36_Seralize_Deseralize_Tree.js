/**
 * Definition for a binary tree node
 * Node contains:
 * - data: the value stored in the node
 * - left: pointer to left child
 * - right: pointer to right child
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * SERIALIZE
 * Converts a binary tree into a comma-separated string using BFS (level order traversal).
 *
 * Idea:
 *  - Use a queue to perform BFS traversal.
 *  - Add "null" for missing children so we can reconstruct the tree later.
 *  - Append each value to a string separated by commas.
 *
 * @param {Node} root - The root node of the binary tree
 * @return {string} - Serialized string representation of the binary tree
 *
 * Time Complexity: O(N) → each node is visited once
 * Space Complexity: O(N) → queue can hold up to all nodes in a level
 */
const serialize = function (root) {
  if (!root) return "";

  let serializeStr = "";
  let queue = [root];

  while (queue.length > 0) {
    let front = queue.shift();

    if (!front) {
      serializeStr += "null, ";
    } else {
      serializeStr += `${front.data}, `;
      queue.push(front.left);
      queue.push(front.right);
    }
  }

  return serializeStr;
};

/**
 * DESERIALIZE
 * Converts a serialized string back into a binary tree.
 *
 * Idea:
 *  - Split the string into an array of values.
 *  - Use BFS to assign left and right children in order.
 *  - Skip "null" values so missing children are kept as null.
 *
 * @param {string} data - The serialized binary tree string
 * @return {Node} - The root node of the reconstructed binary tree
 *
 * Time Complexity: O(N) → we process each value once
 * Space Complexity: O(N) → queue stores nodes during reconstruction
 */
const deserialize = function (data) {
  if (!data) return null;

  // Convert string to array of values (remove spaces and empty values)
  let values = data
    .split(",")
    .map((val) => val.trim())
    .filter((val) => val.length > 0);

  // Create root node
  let root = new Node(parseInt(values[0]));
  let queue = [root];
  let i = 1;

  while (queue.length > 0 && i < values.length) {
    let current = queue.shift();

    // Left child
    if (values[i] !== "null") {
      let leftNode = new Node(parseInt(values[i]));
      current.left = leftNode;
      queue.push(leftNode);
    }
    i++;

    // Right child
    if (i < values.length && values[i] !== "null") {
      let rightNode = new Node(parseInt(values[i]));
      current.right = rightNode;
      queue.push(rightNode);
    }
    i++;
  }

  return root;
};

// Example usage:
const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.right.left = new Node(4);
tree.right.right = new Node(5);

console.log("Serialized Tree:", serialize(tree));
console.log("Deserialized Tree:", serialize(deserialize(serialize(tree))));
