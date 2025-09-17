class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Get index of left child
    getLeftChild(i) {
        return 2 * i + 1;
    }

    // Get index of right child
    getRightChild(i) {
        return 2 * i + 2;
    }

    // Get index of parent
    getParent(i) {
        return Math.floor((i - 1) / 2);
    }

    // Swap two values inside the heap array
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    // Insert element into heap and maintain max-heap property
    insert(val) {
        this.heap.push(val);
        this.heapify();
    }

    heapify() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIdx = this.getParent(index);
            if (this.heap[parentIdx] < this.heap[index]) {
                this.swap(parentIdx, index);
                index = parentIdx;
            } else return;
        }
    }

    delete() {
        // swap 1 to last
        this.swap(this.heap.length - 1, 0);

        // remove last
        this.heap.pop();

        let index = 0;
        let size = this.heap.length;

        while (true) {
            let left = this.getLeftChild(index);
            let right = this.getRightChild(index);
            let largest = index;

            if (left < size && this.heap[largest] < this.heap[left])
                largest = left;

            if (right < size && this.heap[largest] < this.heap[right])
                largest = right;

            if (largest !== index) {
                this.swap(largest, index);
                index = largest;
            } else break;
        }
    }

    // Return min element (root)
    peek() {
        return this.heap[0];
    }

    // Return size of heap
    size() {
        return this.heap.length;
    }

    // Utility: return heap array
    getHeap() {
        return this.heap;
    }
}

// Binary Search Tree Node
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Convert Binary Search Tree to Min Heap
// Time: O(n), Space: O(n)
function bstToHeap(root) {
    // inorder arr create
    let arr = [];
    function inorder(root) {
        if (!root) return;
        inorder(root.left);
        arr.push(root.data);
        inorder(root.right);
    }
    inorder(root);

    // build min heap using arr
    let maxHeap = new MaxHeap();

    for (let num of arr) maxHeap.insert(num);

    return maxHeap.getHeap();
}

// Convert Binary Search Tree to Min Heap
// condition: Root > left > right
// Time: O(n) + O(n), Space: O(N) + O(h) -> O(n) for array, O(h) recursion stack
function bstToSpecialMaxHeap(root) {
    // Step 1: inorder traversal → sorted array
    let inorderArr = [];
    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        inorderArr.push(node.data);
        inorder(node.right);
    }
    inorder(root);

    // Step 2: fill BST in postorder with elements from inorderArr
    let index = 0;
    function postorderFill(node) {
        if (!node) return;

        postorderFill(node.left);
        postorderFill(node.right);

        node.data = inorderArr[index++];
    }

    postorderFill(root);
    return root;
}

let root = new Node(4);
root.left = new Node(2);
root.right = new Node(6);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(7);

let toHeap = bstToHeap(root);
console.log(toHeap);
