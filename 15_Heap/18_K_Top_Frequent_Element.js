/**
 * Problem Statement:
 * ------------------
 * Given an integer array `arr` and an integer `k`, return the `k` most frequent elements.
 * 
 * Example:
 * Input: arr = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * 
 * ------------------------------------------------------------
 * Approach 1: Sorting
 * ------------------------------------------------------------
 * Intuition:
 * - Count the frequency of each element using a hashmap.
 * - Convert the map into an array of [element, frequency].
 * - Sort the array in descending order of frequency.
 * - Pick the first `k` elements.
 * 
 * Complexity:
 * - Building the frequency map: O(N)
 * - Sorting: O(M log M), where M is the number of unique elements
 * - Overall: O(N + M log M)
 * 
 */
function kTopFreqElement(arr, k) {
    // step 1: count frequency
    let map = new Map();
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // step 2: sort by frequency in descending order
    let sortedFreq = [...map.entries()];
    sortedFreq.sort((a, b) => b[1] - a[1]);

    // step 3: pick top k elements
    let result = [];
    for (let num of sortedFreq) {
        if (k > 0) {
            result.push(num[0]);
            k--;
        } else break;
    }

    return result;
}

/**
 * ------------------------------------------------------------
 * Approach 2: Min Heap
 * ------------------------------------------------------------
 * Intuition:
 * - Instead of sorting all elements, use a min heap of size `k`:
 *   → Push [frequency, element] into the heap.
 *   → If heap size exceeds `k`, pop the smallest (least frequent).
 * - This ensures the heap always contains the top `k` frequent elements.
 * 
 * Complexity:
 * - Building frequency map: O(N)
 * - Inserting into heap: O(M log K), where M is number of unique elements
 * - Extracting result: O(K log K) (for deletions)
 * - Overall: O(N + M log K), better than sorting when K << M
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
            if (this.heap[parentIdx][0] > this.heap[index][0]) {
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

            if (left < size && this.heap[smallest][0] > this.heap[left][0])
                smallest = left;

            if (right < size && this.heap[smallest][0] > this.heap[right][0])
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

    getHeap() {
        return this.heap;
    }

    peek() {
        return this.heap[0];
    }
}

function kTopFreqElement_(arr, k) {
    // step 1: count frequency
    let map = new Map();
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // step 2: maintain a min heap of size k
    let minHeap = new MinHeap();
    for (let [key, freq] of map) {
        if (minHeap.size() < k) {
            minHeap.insert([freq, key]);
        } else if (freq > minHeap.peek()[0]) {
            minHeap.delete();
            minHeap.insert([freq, key]);
        }
    }

    // step 3: extract elements from heap
    let result = [];
    while (minHeap.size() > 0) {
        result.push(minHeap.delete()[1]);
    }

    return result;
}

// Example Usage
let arr = [1, 1, 1, 2, 2, 3];
let k = 2;
// let check = kTopFreqElement(arr, k);
let check = kTopFreqElement_(arr, k);
console.log(`The k: ${k} Top Frequent Element in ${arr} is: ${check}`);
