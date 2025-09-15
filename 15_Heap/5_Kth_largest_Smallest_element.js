// MaxHeap implementation for k-th smallest element
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Index helpers
    getLeftChild(i) {
        return 2 * i + 1;
    }

    getRightChild(i) {
        return 2 * i + 2;
    }

    getParent(i) {
        return Math.floor((i - 1) / 2);
    }

    // Swap two values inside the heap array
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    // Insert value into heap and restore max-heap property (heapify up)
    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIdx = this.getParent(index);
            // If child > parent, swap
            if (this.heap[parentIdx] < this.heap[index]) {
                this.swap(index, parentIdx);
                index = parentIdx; // move upward
            } else break;
        }
    }

    // Remove the root (max element) from the heap
    deletion() {
        if (this.heap.length === 0) return null;

        // Swap root with last element
        this.swap(0, this.heap.length - 1);

        // Remove last (max element)
        const removed = this.heap.pop();

        // Heapify down from root
        let index = 0;
        let size = this.heap.length;

        while (true) {
            let left = this.getLeftChild(index);
            let right = this.getRightChild(index);
            let larger = index;

            if (left < size && this.heap[larger] < this.heap[left])
                larger = left;
            if (right < size && this.heap[larger] < this.heap[right])
                larger = right;

            if (larger !== index) {
                this.swap(larger, index);
                index = larger; // move downward
            } else break;
        }

        return removed;
    }

    getHeap() {
        return this.heap;
    }

    peek() {
        return this.heap[0];
    }
}

// MinHeap implementation for k-th largest element
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Index helpers
    getLeftChild(i) {
        return 2 * i + 1;
    }

    getRightChild(i) {
        return 2 * i + 2;
    }

    getParent(i) {
        return Math.floor((i - 1) / 2);
    }

    // Swap two values inside the heap array
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    // Insert value into heap and restore max-heap property (heapify down)
    insert(val) {
        this.heap.push(val);
        this.heapify();
    }

    heapify() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIdx = this.getParent(index);
            // If child > parent, swap
            if (this.heap[parentIdx] > this.heap[index]) {
                this.swap(index, parentIdx);
                index = parentIdx; // move upward
            } else break;
        }
    }

    // Remove the root (min element) from the heap
    deletion() {
        if (this.heap.length === 0) return null;

        // Swap root with last element
        this.swap(0, this.heap.length - 1);

        // Remove last (min element)
        const removed = this.heap.pop();

        // Heapify down from root
        let index = 0;
        let size = this.heap.length;

        while (true) {
            let left = this.getLeftChild(index);
            let right = this.getRightChild(index);
            let smaller = index;

            if (left < size && this.heap[smaller] > this.heap[left])
                smaller = left;
            if (right < size && this.heap[smaller] > this.heap[right])
                smaller = right;

            if (smaller !== index) {
                this.swap(smaller, index);
                index = smaller;
            } else break;
        }

        return removed;
    }

    getHeap() {
        return this.heap;
    }

    peek() {
        return this.heap[0];
    }
}

// Function to find k-th smallest element
function kthSmallest(arr, k) {
    /**
     * ❌ Failed Try 1:
     *  - Built a MaxHeap with ALL elements, then tried to pick from it.
     *  - Problem: If we build full heap, removing k-1 elements costs O(k log n),
     *    which is unnecessary overhead. We only need to maintain size k, not n.
     *
     * ❌ Failed Try 2:
     *  - Tried to use a custom heapify() on the array to build heap.
     *  - Mistake: Used wrong logic (created a MinHeap instead of MaxHeap)
     *    and also didn’t maintain only k elements — ended up building a full heap again.
     */

    // ✅ Correct Algorithm:
    // Step 1: Insert first k elements into a MaxHeap
    //         (so the largest of these k is at the root).
    let maxHeap = new MaxHeap();
    for (let i = 0; i < k; i++) {
        maxHeap.insert(arr[i]);
    }

    // Step 2: Traverse the rest of the array
    // If current element is smaller than heap root (largest of k),
    // remove root and insert this element → keeps only k smallest.
    for (let i = k; i < arr.length; i++) {
        if (arr[i] < maxHeap.peek()) {
            maxHeap.deletion();
            maxHeap.insert(arr[i]);
        }
    }

    // Step 3: Root of heap = k-th smallest element
    return maxHeap.peek();
}

// function to find k-th largest element
function kthLargest(arr, k) {
    let minHeap = new MinHeap();
    for (let i = 0; i < k; i++) {
        minHeap.insert(arr[i]);
    }

    for (let i = k; i < arr.length; i++) {
        if (arr[i] > minHeap.peek()) {
            minHeap.deletion();
            minHeap.insert(arr[i]);
        }
    }

    return minHeap.peek();
}

// Example usage
let arr = [3, 2, 1, 5, 6, 4];
let k = 3;
let ans = kthSmallest(arr, k);
console.log(`${k}th Smallest in [${arr}] is: ${ans}`);

ans = kthLargest(arr, k);
console.log(`${k}th Largest in [${arr}] is: ${ans}`);

/*
⏱ Complexity Analysis
Heap insert / delete: O(log k)
Building heap with first k elements: O(k log k)
Processing remaining n - k elements: (n - k) * O(log k)
Total = O(n log k)
→ Better than sorting (O(n log n)), especially when k << n.
Space Complexity: O(k) for the heap.
*/
