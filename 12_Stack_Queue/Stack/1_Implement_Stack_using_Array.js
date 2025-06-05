class Stack {
  constructor() {
    this.element = [];
  }

  // push
  push(value) {
    this.element.push(value);
  }

  // pop
  pop() {
    if (this.element.length == 0) return null;
    return this.element.pop();
  }

  // peek
  peek() {
    return this.element[this.element.length - 1];
  }

  // isEmpty
  isEmpty() {
    return this.element.length == 1;
  }

  size() {
    return this.element.length;
  }
}

const arr = [1, 2, 3, 4, 5];

const stack = new Stack();

for (let i = 0; i < arr.length; i++) {
  stack.push(arr[i]);
}

console.log(stack);

console.log("Popped Element:", stack.pop());
console.log("Peek Element:", stack.peek());
console.log("Is Empty:", stack.isEmpty());
console.log("Size:", stack.size());
