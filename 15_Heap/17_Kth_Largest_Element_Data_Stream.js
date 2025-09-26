/**
 * Problem Statement:
 * ------------------
 * Design a data structure that continuously maintains the kth largest element 
 * in a stream of numbers.
 *
 * Example:
 * Input: arr = [4,5,8,2], k = 3
 * After adding 3 → kth largest = 4
 * After adding 5 → kth largest = 5
 * After adding 10 → kth largest = 5
 * After adding 9 → kth largest = 8
 * After adding 4 → kth largest = 8
 *
 * ------------------------------------------------------------
 * Approach 1: Brute Force (Sorting each time)
 * ------------------------------------------------------------
 * Intuition:
 * - Keep inserting new values into the array.
 * - Sort the array in descending order each time.
 * - Return the kth element from the sorted array.
 * 
 * Complexity:
 * - Insert: O(1)
 * - Sorting: O(N log N) each time
 * - Query kth largest: O(1) after sorting
 * - Overall: O(N log N) per query → inefficient for streams
 *
 */

function KthLargest(arr, k) {
    this.arr = arr;
    this.k = k;
}

KthLargest.prototype.add = function (val) {
    this.arr.push(val);
    this.arr.sort((a, b) => b - a); // sort descending
    return this.arr[this.k - 1]; // kth largest
};

/**
 * ------------------------------------------------------------
 * Approach 2: Min Heap (Optimized)
 * ------------------------------------------------------------
 * Intuition:
 * - Maintain a min heap of size k.
 * - The root of the min heap always contains the kth largest element.
 * - Each time we add a number:
 *   → If heap size < k, insert it.
 *   → Else if number > heap root, pop root and insert number.
 *   → Return heap root.
 * 
 * Complexity:
 * - Insert/Delete in Heap: O(log K)
 * - Each add operation: O(log K)
 * - Much better than sorting for continuous streams.
 *
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.heapify();
    }

    heapify() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            if (this.heap[parentIdx] > this.heap[index]) {
                [this.heap[parentIdx], this.heap[index]] = [
                    this.heap[index],
                    this.heap[parentIdx],
                ];
                index = parentIdx;
            } else return;
        }
    }

    delete() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        [this.heap[this.heap.length - 1], this.heap[0]] = [
            this.heap[0],
            this.heap[this.heap.length - 1],
        ];

        let min = this.heap.pop();
        let index = 0;
        let size = this.heap.length;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < size && this.heap[smallest] > this.heap[left])
                smallest = left;

            if (right < size && this.heap[smallest] > this.heap[right])
                smallest = right;

            if (smallest !== index) {
                [this.heap[smallest], this.heap[index]] = [
                    this.heap[index],
                    this.heap[smallest],
                ];
                index = smallest;
            } else break;
        }

        return min;
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }
}

function KthLargest_(arr, k) {
    this.k = k;
    this.minHeap = new MinHeap();

    for (let num of arr) {
        if (this.minHeap.size() < this.k) {
            this.minHeap.insert(num);
        } else if (num > this.minHeap.peek()) {
            this.minHeap.delete();
            this.minHeap.insert(num);
        }
    }
}

KthLargest_.prototype.add_ = function (val) {
    if (this.minHeap.size() < this.k) {
        this.minHeap.insert(val);
    } else if (val > this.minHeap.peek()) {
        this.minHeap.delete();
        this.minHeap.insert(val);
    }
    return this.minHeap.peek(); // kth largest
};

/**
 * Example Usage
 */
let obj1 = new KthLargest([4, 5, 8, 2], 3);
console.log(obj1.add(3));  // 4
console.log(obj1.add(5));  // 5
console.log(obj1.add(10)); // 5
console.log(obj1.add(9));  // 8
console.log(obj1.add(4));  // 8

let obj2 = new KthLargest_([4, 5, 8, 2], 3);
console.log(obj2.add_(3));  // 4
console.log(obj2.add_(5));  // 5
console.log(obj2.add_(10)); // 5
console.log(obj2.add_(9));  // 8
console.log(obj2.add_(4));  // 8
