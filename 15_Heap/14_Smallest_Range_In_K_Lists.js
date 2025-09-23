/**
 * Problem Statement:
 * ------------------
 * You are given k sorted lists (arrays), each containing n integers.
 * Your task is to find the smallest range [start, end] such that
 * at least one number from each list lies within this range.
 *
 * Example:
 * Input:
 * [
 *   [4, 7, 9, 12, 15],
 *   [0, 8, 10, 14, 20],
 *   [6, 12, 16, 30, 50]
 * ]
 * Output: [6, 8]
 *
 * Explanation:
 * The range [6, 8] includes 6 from list 3, 7 from list 1, and 8 from list 2.
 * No smaller range can include at least one element from each list.
 *
 * ---------------------------------------------------------------
 * Intuition:
 * ----------
 * This is a "merge k sorted lists" type of problem.
 *
 * - Brute force: Use pointers on each list, move the pointer that gives the
 *   current minimum, and keep track of min and max at every step.
 *
 * - Optimized: Use a MinHeap to always get the current minimum across the k lists,
 *   while tracking the maximum separately. This reduces comparisons and speeds up.
 *
 */

/* ----------------------- MinHeap Implementation ----------------------- */
class MinHeap {
    constructor() {
        this.heap = [];
    }

    getLeftChild(i) {
        return 2 * i + 1;
    }
    getRightChild(i) {
        return 2 * i + 2;
    }
    getParent(i) {
        return Math.floor((i - 1) / 2);
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    /** Insert a node into the heap */
    insert(node) {
        this.heap.push(node);
        this.heapifyUp();
    }

    /** Heapify upwards (fix last inserted element) */
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIdx = this.getParent(index);

            if (this.heap[parentIdx].data > this.heap[index].data) {
                this.swap(parentIdx, index);
                index = parentIdx;
            } else break;
        }
    }

    /** Remove and return the smallest node (root) */
    delete() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        this.swap(0, this.heap.length - 1);
        const removed = this.heap.pop();
        this.heapifyDown();
        return removed;
    }

    /** Heapify downwards (fix root element) */
    heapifyDown() {
        let index = 0;
        let size = this.heap.length;

        while (true) {
            let left = this.getLeftChild(index);
            let right = this.getRightChild(index);
            let smallest = index;

            if (left < size && this.heap[left].data < this.heap[smallest].data)
                smallest = left;

            if (
                right < size &&
                this.heap[right].data < this.heap[smallest].data
            )
                smallest = right;

            if (smallest !== index) {
                this.swap(smallest, index);
                index = smallest;
            } else break;
        }
    }

    size() {
        return this.heap.length;
    }
}

/* Node structure to store value along with its row & col position */
class Node {
    constructor(data, row, col) {
        this.data = data; // value from the list
        this.row = row; // which list
        this.col = col; // index in that list
    }
}

/* ----------------------- Brute Force Approach ----------------------- */
/**
 * Brute force:
 *   - Time: O(k * n) in worst case (since each step compares k elements, repeated n times)
 *   - Space: O(k) for pointers
 */
function smallestRange(arr) {
    let k = arr.length;
    let listSize = arr[0].length;

    let pointers = new Array(k).fill(0);
    let minRange = Infinity,
        start = -1,
        end = -1;

    while (true) {
        let minValue = Infinity,
            maxValue = -Infinity,
            minRow = -1;

        for (let i = 0; i < k; i++) {
            // Stop when one list is fully used
            if (pointers[i] === listSize) return [start, end];

            let val = arr[i][pointers[i]];
            if (val < minValue) {
                minValue = val;
                minRow = i;
            }
            if (val > maxValue) maxValue = val;
        }

        // Update range if found smaller
        if (maxValue - minValue < minRange) {
            minRange = maxValue - minValue;
            start = minValue;
            end = maxValue;
        }

        // Move forward in the list that had the minimum
        pointers[minRow]++;
    }
}

/* ----------------------- Heap Optimized Approach ----------------------- */
/*
 * Heap optimized:
 *   - Time: O(n * k * log k)
 *     (every insertion and deletion in heap is O(log k), repeated for n*k elements)
 *   - Space: O(k) for the heap
 */
function smallestRange_(arr) {
    let k = arr.length;
    let n = arr[0].length;

    let minHeap = new MinHeap();
    let maxValue = -Infinity;

    // Insert first element of each list into heap
    for (let i = 0; i < k; i++) {
        let node = new Node(arr[i][0], i, 0);
        minHeap.insert(node);
        maxValue = Math.max(maxValue, arr[i][0]);
    }

    let minRange = Infinity,
        start = -1,
        end = -1;

    while (true) {
        let peek = minHeap.delete();
        let minValue = peek.data;

        // Update range if smaller
        if (maxValue - minValue < minRange) {
            minRange = maxValue - minValue;
            start = minValue;
            end = maxValue;
        }

        // If any list is exhausted → stop
        if (peek.col + 1 == n) break;

        // Insert next element from the same list
        let nextValue = arr[peek.row][peek.col + 1];
        minHeap.insert(new Node(nextValue, peek.row, peek.col + 1));
        maxValue = Math.max(maxValue, nextValue);
    }

    return [start, end];
}

/* ----------------------- leetcode solution ----------------------- */
// When two ranges have the same length, 
// you should prefer the one with the smaller starting value 
// (this is why the expected output was [13,73] instead of [12,73]).
var smallestRange = function (nums) {
    let k = nums.length;
    let n = nums[0].length;

    let minHeap = new MinHeap_();
    let maxValue = -Infinity;

    // Insert first element of each list into heap
    for (let i = 0; i < k; i++) {
        let node = new Node(nums[i][0], i, 0);
        minHeap.insert(node);
        maxValue = Math.max(maxValue, nums[i][0]);
    }

    let minRange = Infinity,
        start = -1,
        end = -1;

    while (true) {
        let peek = minHeap.delete();
        let minValue = peek.data;

        // Update range if smaller OR same length but smaller start
        if (
            maxValue - minValue < minRange ||
            (maxValue - minValue === minRange && minValue < start)
        ) {
            minRange = maxValue - minValue;
            start = minValue;
            end = maxValue;
        }

        // If any list is exhausted → stop
        if (peek.col + 1 === nums[peek.row].length) break;

        // Insert next element from the same list
        let nextValue = nums[peek.row][peek.col + 1];
        minHeap.insert(new Node(nextValue, peek.row, peek.col + 1));
        maxValue = Math.max(maxValue, nextValue);
    }

    return [start, end];
};

/* ----------------------- Example Run ----------------------- */
let arr = [
    [4, 7, 9, 12, 15],
    [0, 8, 10, 14, 20],
    [6, 12, 16, 30, 50],
];

console.log("minimum range (brute):", smallestRange(arr));
console.log("minimum range (heap):", smallestRange_(arr));
