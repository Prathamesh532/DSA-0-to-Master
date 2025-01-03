class Stack {
    constructor() {
        this.ele = []
    }

    push(n) {
        this.ele.push(n)
    }

    pop() {
        if (this.ele.length == 0) return "No element"
        return this.ele.pop()
    }

    peek() {
        if (this.ele.length == 0) return []
        return this.ele[this.ele.length - 1]
    }

    isEmpty() {
        return this.ele.length == 0
    }

    printStack() {
        let str = ""
        for (const element of this.ele) [
            str += element + " "
        ]
        return str
    }
}

/* Sort function */
Stack.prototype.sort = function () {
    // base case 
    if (this.isEmpty() || this.ele.length == 1) return

    // Remove the top element
    let popEle = this.pop()

    // Recursively sort the remaining stack
    this.sort()

    // Insert the popped element back into the sorted stack
    this._insert(popEle)
}

Stack.prototype._insert = function (top) {
    // Base case
    if (this.isEmpty() || this.peek() <= top) {
        this.push(top)
        return
    }
    // Remove the top element
    let pop = this.pop()

    // Recursively insert the element
    this._insert(top)

    // Push the top element back
    this.push(pop)
}

const myStack = new Stack()

myStack.push(11)
myStack.push(2)
myStack.push(32)
myStack.push(3)
myStack.push(41)

console.log("Original Stack:", myStack.printStack());

myStack.sort();

console.log("Sorted Stack:", myStack.printStack());