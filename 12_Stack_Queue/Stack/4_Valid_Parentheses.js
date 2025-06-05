/*
    Push opening brackets onto the stack.
    When a closing bracket is encountered:
    Pop the stack and check if it matches the correct opening bracket.
    At the end, if the stack is empty, the string is valid.
*/

class Stack {
  constructor() {
    this.element = [];
  }

  push(x) {
    this.element.push(x);
  }

  pop() {
    if (this.element.length == 0) return null;
    return this.element.pop();
  }

  isEmpty() {
    return this.element.length == 0;
  }

  size() {
    return this.element.length;
  }
}

const isValid = (s) => {
  let stack = [];
  let mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (Object.values(mapping).includes(char)) stack.push(char);
    else if (!stack.length || mapping[char] !== stack.pop()) return false;
  }

  return stack.length == 0;
};

const isValid_V2 = (s) => {
  let stack = new Stack();
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (Object.values(mapping).includes(char)) stack.push(char);
    else if (stack.isEmpty() || mapping[char] !== stack.pop()) return false;
  }

  return stack.isEmpty();
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));

console.log(isValid_V2("()"));
console.log(isValid_V2("()[]{}"));
console.log(isValid_V2("(]"));