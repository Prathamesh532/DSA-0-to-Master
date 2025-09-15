class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function isBinaryTreeHeap(root) {
    // Count total nodes in the binary tree
    function countNodes(root) {
        if (!root) return 0;
        return 1 + countNodes(root.left) + countNodes(root.right);
    }

    /**
     * Check if the tree is a Complete Binary Tree (CBT)
     * A CBT means all levels are completely filled
     * except possibly the last, which is filled from left to right.
     *
     * index (i) tracks position like array-representation of heap
     * count is total number of nodes
     */
    function isCBT(root, i, count) {
        if (!root) return true;

        // If index >= count, tree is not complete
        if (i >= count) return false;

        // Recursively check left and right subtrees
        let left = isCBT(root.left, 2 * i + 1, count);
        let right = isCBT(root.right, 2 * i + 2, count);

        return left && right;
    }

    /**
     * Check if tree follows Max-Heap property
     * i.e., parent > leftChild and parent > rightChild
     */
    function isMaxHeap(root) {
        if (!root) return true;

        // Leaf node → always valid
        if (!root.left && !root.right) return true;

        // Node has only left child
        if (!root.right) {
            return root.data > root.left.data && isMaxHeap(root.left);
        }

        // Node has both children
        return (
            root.data > root.left.data &&
            root.data > root.right.data &&
            isMaxHeap(root.left) &&
            isMaxHeap(root.right)
        );
    }

    let nodeCount = countNodes(root);

    // ✅ A binary tree is a heap if:
    // 1. It is a Complete Binary Tree (CBT)
    // 2. It follows the Max-Heap property
    return isCBT(root, 0, nodeCount) && isMaxHeap(root);
}

// -----------------------------
// Example 1: Valid Max Heap
// Tree:
//         10
//       /    \
//      9      8
//     / \    /
//    7   6  5
//
let root1 = new Node(10);
root1.left = new Node(9);
root1.right = new Node(8);
root1.left.left = new Node(7);
root1.left.right = new Node(6);
root1.right.left = new Node(5);

console.log("Test 1:", isBinaryTreeHeap(root1)); // ✅ true

// -----------------------------
// Example 2: Not a Heap (violates max-heap property)
// Tree:
//         10
//       /    \
//      15     8   (❌ 15 > 10 so invalid)
//
let root2 = new Node(10);
root2.left = new Node(15);
root2.right = new Node(8);

console.log("Test 2:", isBinaryTreeHeap(root2)); // ❌ false

// -----------------------------
// Example 3: Not a Heap (not complete binary tree)
// Tree:
//         10
//       /
//      9
//        \      (❌ last level not filled from left to right)
//         8
//
let root3 = new Node(10);
root3.left = new Node(9);
root3.left.right = new Node(8);

console.log("Test 3:", isBinaryTreeHeap(root3)); // ❌ false

// -----------------------------
// Example 4: Single Node (edge case)
// Tree: [10]
//
let root4 = new Node(10);

console.log("Test 4:", isBinaryTreeHeap(root4)); // ✅ true

// -----------------------------
// Example 5: Perfect Heap
// Tree:
//         20
//       /    \
//     18      15
//    / \     / \
//   10  12  9   8
//
let root5 = new Node(20);
root5.left = new Node(18);
root5.right = new Node(15);
root5.left.left = new Node(10);
root5.left.right = new Node(12);
root5.right.left = new Node(9);
root5.right.right = new Node(8);

console.log("Test 5:", isBinaryTreeHeap(root5)); // ✅ true
