/**
 * Problem:
 * Given a stream of integers, return the running median
 * after inserting each number.
 *
 * Approach 1: Insertion Sort (O(n^2))
 * Approach 2: Two Heaps (O(n log n))
 */

/**
 * MaxHeap for lower half
 * Intuition: Keep the smaller half of elements, root is maximum
 * Complexity: insert/delete O(log n), peek O(1)
 */
class MaxHeap {
    constructor() {
        this.heap = [];
    }
    getLeftChild(i) { return 2 * i + 1; }
    getRightChild(i) { return 2 * i + 2; }
    getParent(i) { return Math.floor((i - 1) / 2); }
    swap(a, b) { [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]; }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIdx = this.getParent(index);
            if (this.heap[parentIdx] < this.heap[index]) {
                this.swap(parentIdx, index);
                index = parentIdx;
            } else break;
        }
    }

    delete() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        this.swap(0, this.heap.length - 1);
        let removed = this.heap.pop();
        this.heapifyDown(0);
        return removed;
    }

    heapifyDown(index) {
        let size = this.heap.length;
        while (true) {
            let left = this.getLeftChild(index);
            let right = this.getRightChild(index);
            let largest = index;

            if (left < size && this.heap[left] > this.heap[largest]) largest = left;
            if (right < size && this.heap[right] > this.heap[largest]) largest = right;

            if (largest !== index) {
                this.swap(largest, index);
                index = largest;
            } else break;
        }
    }

    peek() { return this.heap[0]; }
    size() { return this.heap.length; }
}

/**
 * MinHeap for upper half
 * Intuition: Keep the larger half of elements, root is minimum
 * Complexity: insert/delete O(log n), peek O(1)
 */
class MinHeap {
    constructor() { this.heap = []; }
    getLeftChild(i) { return 2 * i + 1; }
    getRightChild(i) { return 2 * i + 2; }
    getParent(i) { return Math.floor((i - 1) / 2); }
    swap(a, b) { [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]; }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIdx = this.getParent(index);
            if (this.heap[parentIdx] > this.heap[index]) {
                this.swap(parentIdx, index);
                index = parentIdx;
            } else break;
        }
    }

    delete() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        this.swap(0, this.heap.length - 1);
        let removed = this.heap.pop();
        this.heapifyDown(0);
        return removed;
    }

    heapifyDown(index) {
        let size = this.heap.length;
        while (true) {
            let left = this.getLeftChild(index);
            let right = this.getRightChild(index);
            let smallest = index;

            if (left < size && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < size && this.heap[right] < this.heap[smallest]) smallest = right;

            if (smallest !== index) {
                this.swap(smallest, index);
                index = smallest;
            } else break;
        }
    }

    peek() { return this.heap[0]; }
    size() { return this.heap.length; }
}

/**
 * Approach 1: Using Insertion Sort
 * Intuition: Maintain sorted array by shifting elements
 * Complexity: O(n^2)
 */
function findMedian(arr) {
    let res = [];
    res.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;

        let len = i + 1;
        let median;
        if (len % 2 === 1) median = arr[Math.floor(len / 2)];
        else median = (arr[len / 2 - 1] + arr[len / 2]) / 2;
        res.push(median);
    }
    return res;
}

/**
 * Approach 2: Using Two Heaps
 * Intuition: Balance smaller half in MaxHeap and larger half in MinHeap
 * Complexity: O(n log n)
 */
function findMedian_(arr) {
    let res = [];
    let leftMaxHeap = new MaxHeap();  // smaller half
    let rightMinHeap = new MinHeap(); // larger half

    for (let num of arr) {
        // Step 1: add to maxHeap
        leftMaxHeap.insert(num);

        // Step 2: balance - move max from left to right
        rightMinHeap.insert(leftMaxHeap.delete());

        // Step 3: ensure left >= right
        if (rightMinHeap.size() > leftMaxHeap.size()) {
            leftMaxHeap.insert(rightMinHeap.delete());
        }

        // Step 4: compute median
        if (leftMaxHeap.size() === rightMinHeap.size()) {
            res.push((leftMaxHeap.peek() + rightMinHeap.peek()) / 2);
        } else {
            res.push(leftMaxHeap.peek());
        }
    }
    return res;
}

// Test
let arr = [5, 15, 1, 3, 2, 8];
console.log("Insertion Sort Median:", findMedian([...arr]));
console.log("Heap Median:", findMedian_(arr));
