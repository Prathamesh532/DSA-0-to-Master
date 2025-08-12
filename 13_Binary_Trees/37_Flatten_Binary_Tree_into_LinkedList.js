/**
 * Definition of a Binary Tree Node
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Approach 1: Recursive DFS (Reverse Pre-order)
 *
 * Description:
 * - We perform a reverse pre-order traversal (right → left).
 * - We keep track of the previously visited node (`prev`).
 * - At each step:
 *   1. Flatten the right subtree.
 *   2. Flatten the left subtree.
 *   3. Set `node.right` to `prev`.
 *   4. Set `node.left` to `null`.
 *   5. Update `prev` to the current node.
 * - The result is a right-skewed linked list that follows pre-order traversal order.
 *
 * Time Complexity: O(n) — each node is visited once.
 * Space Complexity: O(h) — recursion stack, h = tree height (O(log n) for balanced, O(n) for skewed).
 */
function flatten(root) {
  let prev = null;

  function dfs(node) {
    if (!node) return;

    dfs(node.right); // Process right subtree first
    dfs(node.left); // Process left subtree next

    node.right = prev; // Link current node to previously processed node
    node.left = null; // Set left child to null
    prev = node; // Update prev pointer
  }

  dfs(root);
  return root;
}

/**
 * Approach 2: Iterative using Stack
 *
 * Description:
 * - Use an explicit stack to simulate pre-order traversal.
 * - Push right child first, then left child (so left is processed first).
 * - At each step:
 *   1. Pop current node from stack.
 *   2. Push right child, then left child (if they exist).
 *   3. Link current node's right to the top of stack (next node in pre-order).
 *   4. Set left to null.
 *
 * Time Complexity: O(n) — each node is pushed and popped once.
 * Space Complexity: O(n) — stack may hold up to n nodes.
 */
function flatten_usingStack(root) {
  if (!root) return;

  let stack = [root];

  while (stack.length > 0) {
    let current = stack.pop();

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);

    if (stack.length > 0) {
      current.right = stack[stack.length - 1];
    }

    current.left = null;
  }
}

/**
 * Approach 3: Morris Traversal (O(1) space)
 *
 * Description:
 * - No recursion or stack.
 * - For each node:
 *   1. If it has a left child, find the rightmost node in the left subtree.
 *   2. Link that node's right to the current node's right subtree.
 *   3. Move the left subtree to the right.
 *   4. Continue with the right child.
 * - Uses threading concept from Morris Traversal.
 *
 * Time Complexity: O(n) — each node is visited at most twice.
 * Space Complexity: O(1) — modifies tree in place without extra data structure.
 */
function flatten_usingMorris(root) {
  if (!root) return;

  let curr = root;

  while (curr !== null) {
    if (curr.left !== null) {
      // Find rightmost node in left subtree
      let prev = curr.left;
      while (prev.right) {
        prev = prev.right;
      }

      // Connect rightmost's right to current right
      prev.right = curr.right;

      // Move left subtree to right
      curr.right = curr.left;
      curr.left = null;
    }
    curr = curr.right;
  }
}

/**
 * Helper: Pre-order Traversal to show flattened tree
 */
function printFlattened(root) {
  let curr = root;
  let result = [];
  while (curr) {
    result.push(curr.data);
    curr = curr.right;
  }
  console.log(result.join(" -> "));
}

/**
 * TEST CASE
 */

// Construct example binary tree
//       1
//      / \
//     2   5
//    / \   \
//   3   4   6

let root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(5);
root1.left.left = new Node(3);
root1.left.right = new Node(4);
root1.right.right = new Node(6);

console.log("Flatten using DFS (Recursive):");
flatten(root1);
printFlattened(root1);

let root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(5);
root2.left.left = new Node(3);
root2.left.right = new Node(4);
root2.right.right = new Node(6);

console.log("Flatten using Stack:");
flatten_usingStack(root2);
printFlattened(root2);

let root3 = new Node(1);
root3.left = new Node(2);
root3.right = new Node(5);
root3.left.left = new Node(3);
root3.left.right = new Node(4);
root3.right.right = new Node(6);

console.log("Flatten using Morris Traversal:");
flatten_usingMorris(root3);
printFlattened(root3);
