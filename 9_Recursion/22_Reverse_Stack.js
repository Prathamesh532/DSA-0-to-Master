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

const reverseStack = (stack) => {
    // base case
    if (stack.isEmpty() || stack.length == 1){
        return 
    }

    // let pop-out the last elemet
    let popEle = stack.pop()

    reverseStack(stack)

    insertAtBottom(stack,popEle)
}

const insertAtBottom = (stack , element) => {
    if(stack.isEmpty()) {
        stack.push(element)
        return
    }

    let popEle = stack.pop()

    insertAtBottom(stack,element)

    stack.push(popEle)
}


const myStack = new Stack()

myStack.push(11)
myStack.push(2)
myStack.push(32)
myStack.push(3)
myStack.push(41)

console.log("Original Stack:", myStack.printStack());

reverseStack(myStack)

console.log("Reversed Stack:", myStack.printStack());
