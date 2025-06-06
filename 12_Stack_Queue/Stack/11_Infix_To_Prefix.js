/*

Infix Expression :- (A+B)*(C-D)
Prefix Expression :- +*AB-CD

Infix to Prefix:- 1. Reverse the infix expression. Note while reversing each '(' will become ')' and each ')' becomes '('.
                  2. Convert the reversed infix expression to postfix expression.
                        Initialize an empty stack to store operators and an empty string for the postfix expression.
                        Scan the infix expression from left to right.
                        If the character is an operand, append it to the postfix expression.
                        If the character is '(', push it onto the stack.
                        If the character is ')', pop from the stack and append to the postfix expression until '(' is found, then pop '(' without appending.
                        If the character is an operator, pop and append operators from the stack until the stack is empty or a lower precedence operator is found, then push the current operator onto the stack.
                        After scanning the expression, pop and append all remaining operators from the stack to the postfix expression.
                  3. Reverse the postfix expression and return it.
*/

// To check if char is operand
const isOperands = (char) => /[A-Za-z0-9]/.test(char);

const infixToPrefix = (expression) => {
  // store the prefix expression
  let prefixExp = "";

  // store the precendence
  const stack = [];

  const precendence = { "^": 3, "/": 2, "*": 2, "+": 1, "-": 1 };

  // reverse the expression
  const exp = expression
    .split("")
    .reverse()
    .map((ch) => {
      if (ch === "(") return ")";
      if (ch === ")") return "(";
      return ch;
    });

  // run loop from left to right
  for (let char of exp) {
    // check if operands, if yes push to stack
    if (isOperands(char)) prefixExp += char;
    // check char is opening bracket, if yes push to stack
    else if (char === "(") stack.push(char);
    // check char is closing bracket, if yes pop from stack till opening bracket
    else if (char === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        prefixExp += stack.pop();
      }
      // remove the "("
      stack.pop();
    }
    // if char is operator
    else {
      // check the precendence
      while (
        stack.length &&
        precendence[char] <= precendence[stack[stack.length - 1]]
      ) {
        // pop out from stack
        prefixExp += stack.pop();
      }
      // if precendence is less than stack top, push to stack
      stack.push(char);
    }
  }

  while (stack.length) {
    prefixExp += stack.pop();
  }

  return prefixExp.split("").reverse().join("");
};

const result = infixToPrefix("a*b+c/d");
console.log("Infix--To--Prefix:- ", result);
