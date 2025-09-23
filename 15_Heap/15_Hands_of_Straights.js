/**
 *
 *
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

    insert(val) {
        this.heap.push(val);
        this.heapify();
    }

    heapify() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIdx = this.getParent(index);
            if (this.heap[parentIdx] > this.heap[index]) {
                this.swap(parentIdx, index);
                index = parentIdx;
            } else return;
        }
    }

    delete() {
        this.swap(this.heap.length - 1, 0);
        let min = this.heap.pop();

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

        return min;
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    getHeap() {
        return this.heap;
    }
}

// O(N) map setting + O(N * K) forming group and checking
// O(N) - map space
function isNStraightHand(hand, groupSize) {
    let n = hand.length;
    if (n % groupSize !== 0) return false;

    let hashMap = new Map();

    for (let num of hand) hashMap.set(num, (hashMap.get(num) || 0) + 1);

    for (let num of hand) {
        if (!hashMap.get(num) > 0) {
            for (let i = 0; i < groupSize; i++) {
                let curr = num + i;
                if ((hashMap.get(curr) === 0) | !hashMap.has(curr))
                    return false;

                hashMap.set(curr, hashMap.get(curr) - 1);
            }
        }
    }

    return true;
}

function isNStraightHand_(hand, groupSize) {
    let n = hand.length;
    if (n % groupSize !== 0) return false;

    // Frequency map
    let freq = new Map();
    for (let num of hand) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    // Build min-heap of unique keys
    let heap = new MinHeap();
    for (let key of freq.keys()) heap.insert(key);

    while (heap.size() > 0) {
        let first = heap.peek(); // smallest number

        // Try to build a group [first, first+1, ..., first+groupSize-1]
        for (let i = 0; i < groupSize; i++) {
            let curr = first + i;

            if (!freq.has(curr) || freq.get(curr) === 0) {
                return false; // cannot form group
            }

            freq.set(curr, freq.get(curr) - 1);

            if (freq.get(curr) === 0) {
                if (curr !== heap.peek()) {
                    return false; // element used up but not in order
                }
                heap.delete(); // remove from heap
            }
        }
    }

    return true;
}

const hand = [1, 2, 3, 3, 4, 4, 5, 6];
let groupSize = 4;
let check = isNStraightHand(hand, groupSize);
console.log(`Is hand: ${hand} with GroupSize: ${groupSize} formed: ${check}`);
