/**
 * Problem: Merge k Sorted Linked Lists (LeetCode 23 - Hard)
 * --------------------------------------------------------
 * You are given an array of k sorted linked lists, each sorted in ascending order.
 * Merge all the linked lists into one sorted linked list and return it.
 *
 * Example:
 * Input: [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 *
 * --------------------------------------------------------
 * Intuition / Approach:
 * - A naive approach would be to merge all nodes into an array, sort, and rebuild.
 *   -> Time: O(N log N), Space: O(N)
 * - Optimized approach: Use a MinHeap (Priority Queue)
 *   1. Push the head node of each list into the MinHeap.
 *   2. Extract the minimum element (smallest node) from the heap.
 *   3. Append it to the merged linked list.
 *   4. If that node has a `next`, insert the next node into the heap.
 *   5. Repeat until the heap is empty.
 *
 * Why MinHeap?
 * - At every step, we need the "smallest available node" among k lists.
 * - Heap gives O(log k) insertion/deletion.
 *
 * --------------------------------------------------------
 * Complexity Analysis:
 * - Let N = total number of nodes across all k lists
 * - Each node is inserted + extracted from heap once → O(N log k)
 * - Space Complexity: O(k) (heap stores at most k nodes at a time)
 *
 * --------------------------------------------------------
 * Implementation:
 * - Define Node class (linked list node)
 * - Define MinHeap class (custom heap for Node objects)
 * - Use dummy head to simplify merging
 * - Return dummy.next as merged list head
 */

// ----------------------------
// MinHeap implementation for Node objects
// ----------------------------
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

    /**
     * Insert a node into the heap
     */
    insert(node) {
        this.heap.push(node);
        this.heapifyUp();
    }

    /**
     * Heapify upwards (fix position of last element)
     */
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIdx = this.getParent(index);

            // Compare based on node.data
            if (this.heap[parentIdx].data > this.heap[index].data) {
                this.swap(parentIdx, index);
                index = parentIdx;
            } else return;
        }
    }

    /**
     * Remove and return the smallest node (root of heap)
     */
    delete() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        this.swap(0, this.heap.length - 1);
        const removed = this.heap.pop();
        this.heapifyDown();
        return removed;
    }

    /**
     * Heapify downwards (fix position of root element)
     */
    heapifyDown() {
        let index = 0;
        let size = this.heap.length;

        while (true) {
            let left = this.getLeftChild(index);
            let right = this.getRightChild(index);
            let smallest = index;

            if (left < size && this.heap[smallest].data > this.heap[left].data)
                smallest = left;

            if (
                right < size &&
                this.heap[smallest].data > this.heap[right].data
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

// ----------------------------
// Node definition for Linked List
// ----------------------------
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// ----------------------------
// Merge K Sorted Linked Lists using MinHeap
// ----------------------------
function mergeKLists(lists) {
    let minHeap = new MinHeap();

    // Step 1: Insert head of each list into heap
    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) minHeap.insert(lists[i]);
    }

    // Step 2: Use dummy node to simplify merged list construction
    let dummy = new Node(0);
    let current = dummy;

    // Step 3: Extract min from heap, attach to result list, insert next if any
    while (minHeap.size() > 0) {
        let curr = minHeap.delete(); // get smallest node
        current.next = curr; // append to merged list
        current = current.next;

        if (curr.next) {
            minHeap.insert(curr.next); // push next node of same list
        }
    }

    // Step 4: Return merged list (skipping dummy)
    return dummy.next;
}

// ----------------------------
// Example Test
// ----------------------------
const l1 = new Node(1);
l1.next = new Node(4);
l1.next.next = new Node(5);

const l2 = new Node(1);
l2.next = new Node(3);
l2.next.next = new Node(4);

const l3 = new Node(2);
l3.next = new Node(6);

const lists = [l1, l2, l3];
let mergedHead = mergeKLists(lists);

// Print merged list as array
let result = [];
while (mergedHead) {
    result.push(mergedHead.data);
    mergedHead = mergedHead.next;
}
console.log(result); // Output: [1, 1, 2, 3, 4, 4, 5, 6]
