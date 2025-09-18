/**
 * 🔥 Problem: K-th Largest Sum of Subarrays
 *
 * Given an integer array `arr` of size N and an integer `k`,
 * find the k-th largest sum among all possible subarray sums.
 *
 * Example:
 * Input: arr = [10, -10, 20, -40], k = 6
 * All subarray sums = [10, 0, 20, -20, -10, 10, -30, 20, -20, -40]
 * Sorted descending = [20, 20, 10, 10, 0, -10, -20, -20, -30, -40]
 * 6th largest = -10
 *
 * Output: -10
 *
 * --------------------------------------------------------------
 * Approaches:
 * 1️⃣ Brute Force (O(N^2) space, O(N^2 log N) time)
 * 2️⃣ Prefix Sum + Sorting (O(N^2) space, O(N^2 log N) time)
 * 3️⃣ Min-Heap of size k (O(k) space, O(N^2 log k) time) ✅ Optimized
 * --------------------------------------------------------------
 */

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

    // Insert element and heapify up
    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIdx = this.getParent(index);
            if (this.heap[parentIdx] > this.heap[index]) {
                // MinHeap condition
                this.swap(parentIdx, index);
                index = parentIdx;
            } else return;
        }
    }

    // Remove root (min element) and heapify down
    delete() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        this.swap(0, this.heap.length - 1);
        const removed = this.heap.pop();
        this.heapifyDown();
        return removed;
    }

    heapifyDown() {
        let index = 0;
        let size = this.heap.length;

        while (true) {
            let left = this.getLeftChild(index);
            let right = this.getRightChild(index);
            let smallest = index;

            if (left < size && this.heap[smallest] > this.heap[left])
                smallest = left;
            if (right < size && this.heap[smallest] > this.heap[right])
                smallest = right;

            if (smallest !== index) {
                this.swap(smallest, index);
                index = smallest;
            } else break;
        }
    }

    peek() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
    getHeap() {
        return this.heap;
    }
}

/**
 * 1️⃣ Brute Force
 * - Generate all subarray sums
 * - Store in array, sort in descending order
 * - Return k-th largest
 * Time: O(N^2 log N)
 * Space: O(N^2)
 */
function kthLargestSumSubArray(arr, k) {
    let allSum = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            allSum.push(sum);
        }
    }
    allSum.sort((a, b) => b - a);
    return allSum[k - 1];
}

/**
 * 2️⃣ Prefix Sum Optimization
 * - Precompute prefix sum
 * - Subarray sum = prefix[j] - prefix[i]
 * - Still stores all O(N^2) sums
 * Time: O(N^2 log N)
 * Space: O(N^2)
 */
function kthLargestSumSubArray_prefixSum(arr, k) {
    let n = arr.length;
    let prefixSum = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
    }

    let sumSubArr = [];
    for (let i = 0; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            sumSubArr.push(prefixSum[j] - prefixSum[i]);
        }
    }

    sumSubArr.sort((a, b) => b - a);
    return sumSubArr[k - 1];
}

/**
 * 3️⃣ Optimized Heap Approach
 * - Maintain a MinHeap of size k
 * - Iterate all subarray sums (O(N^2))
 * - Keep only top k sums
 * - Heap root = k-th largest
 * Time: O(N^2 log k)
 * Space: O(k)
 */
function kthLargestSumSubArray_usingHEAP(arr, k) {
    let minHeap = new MinHeap();

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];

            if (minHeap.size() < k) {
                minHeap.insert(sum);
            } else if (sum > minHeap.peek()) {
                minHeap.delete();
                minHeap.insert(sum);
            }
        }
    }

    return minHeap.peek();
}

// ------------------------------------------------------
// 🔎 Example Run
let arr = [10, -10, 20, -40];
let k = 6;

console.log("Brute Force:", kthLargestSumSubArray(arr, k));
console.log("Prefix Sum:", kthLargestSumSubArray_prefixSum(arr, k));
console.log("Heap Optimized:", kthLargestSumSubArray_usingHEAP(arr, k));

/**
 * ❌ Why this direct Max Heap approach won’t work
 * In your problem, we’re not just finding the k-th largest array element.
 * We’re finding the k-th largest subarray sum.
 */
// function kthLargestSumSubArray_usingHEAP(arr, k) {
//     let maxHeap = new MaxHepa();
//     for (let num of arr) maxHeap.insert(num);
//     while (k > 1) {
//         maxHeap.delete();
//         k--;
//     }
//     return maxHeap.peek();
// }
