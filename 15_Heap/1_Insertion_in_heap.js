class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // get parenet Node
    getParentNode(index) {
        return Math.floor((index - 1) / 2);
    }

    // get Left Child Node
    getLeftChildNode(index) {
        return 2 * index + 1;
    }

    // get Right Child Node
    getRightChildNode(index) {
        return 2 * index + 2;
    }

    // swap 2 element
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    // insert in heap (max)
    insert(val) {
        this.heap.push(val);
        this.heapify();
    }

    // heapify function which arrange the node/element in proper according heap property
    heapify() {
        // where the insert of new element happens
        let lastIndex = this.heap.length - 1;

        // place the element/node in there proper palce
        while (lastIndex > 0) {
            // get the possible parenet element index
            let parnetIndex = this.getParentNode(lastIndex);

            // if the parent element is smaller means the insert element in bigger than swap
            if (this.heap[parnetIndex] < this.heap[lastIndex]) {
                this.swap(parnetIndex, lastIndex);
                lastIndex = parnetIndex;
            } else break;
        }
    }

    // print heap
    print() {
        for (let i = 0; i < this.heap.length; i++) {
            console.log(this.heap[i]);
        }
    }

    // print heap as tree
    printTreeStructure(index = 0, indent = "", isLeft = true) {
        if (index >= this.heap.length) return;

        let rightIndex = this.getRightChildNode(index);
        if (rightIndex < this.heap.length) {
            this.printTreeStructure(
                rightIndex,
                indent + (isLeft ? "│   " : "    "),
                false
            );
        }

        console.log(indent + (isLeft ? "└── " : "┌── ") + this.heap[index]);

        let leftIndex = this.getLeftChildNode(index);
        if (leftIndex < this.heap.length) {
            this.printTreeStructure(
                leftIndex,
                indent + (isLeft ? "    " : "│   "),
                true
            );
        }
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // get parenet Node
    getParentNode(index) {
        return Math.floor((index - 1) / 2);
    }

    // get Left Child Node
    getLeftChildNode(index) {
        return 2 * index + 1;
    }

    // get Right Child Node
    getRightChildNode(index) {
        return 2 * index + 2;
    }

    // swap 2 element
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    // insert in heap (max)
    insert(val) {
        this.heap.push(val);
        this.heapify();
    }

    heapify() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIndex = this.getParentNode(index);
            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else break;
        }
    }

    // print heap
    print() {
        for (let i = 0; i < this.heap.length; i++) {
            console.log(this.heap[i]);
        }
    }

    // print heap as tree
    printTreeStructure(index = 0, indent = "", isLeft = true) {
        if (index >= this.heap.length) return;

        let rightIndex = this.getRightChildNode(index);
        if (rightIndex < this.heap.length) {
            this.printTreeStructure(
                rightIndex,
                indent + (isLeft ? "│   " : "    "),
                false
            );
        }

        console.log(indent + (isLeft ? "└── " : "┌── ") + this.heap[index]);

        let leftIndex = this.getLeftChildNode(index);
        if (leftIndex < this.heap.length) {
            this.printTreeStructure(
                leftIndex,
                indent + (isLeft ? "    " : "│   "),
                true
            );
        }
    }
}

/* MAX HEAP */
const heapMax = new MaxHeap();
heapMax.insert(50);
heapMax.insert(30);
heapMax.insert(70);
heapMax.insert(20);
heapMax.insert(40);
heapMax.insert(60);
heapMax.print();
heapMax.printTreeStructure();

/* MIN HEAP */
const heapMin = new MinHeap();
heapMin.insert(50);
heapMin.insert(30);
heapMin.insert(70);
heapMin.insert(20);
heapMin.insert(40);
heapMin.insert(60);
heapMin.print();
heapMin.printTreeStructure();

/**
 *
 * insetion in heap happens in O(log N) Time complexity
 *
 */
