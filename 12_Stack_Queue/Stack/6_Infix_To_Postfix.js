/*

Operators:- / *, +, -, (, ), ^, ...
Operands:- a, b, c, ..., A, B, C, ..., 0 to 9

Operators Precedence (left to right):-  1. ()
                                        2. ^
                                        3. *, /
                                        4. +, -
                                        E.g.:-  5 + 3 * 2
                                                Multiplication happens first: 3 * 2 = 6
                                                Then addition: 5 + 6 = 11
                                        E.g.:-  (5 + 3) * 2
                                                Parentheses first: 5 + 3 = 8
                                                Then multiply: 8 * 2 = 16


INFIX Expression :- operator comes in between the operands
                    Operand1  Operator  Operand2
                    E.g., A + B

POSTFIX Expression:- operator comes after the operands
                    Operand1  Operand2  Operator
                    E.g., A B +

PREFIX Expression:- operator comes before the operands
                    Operator  Operand1  Operand2
                    E.g., + A B

*/

/*

Infix to Postfix:-  1. Create an empty stack.
                    2. Scan the infix expression from left to right.
                    3. If the scanned character is an operand, add it to the postfix expression.
                    4. If the scanned character is an '(', push it to the stack.
                    5. If the scanned character is an ')', pop from the stack and add it to the postfix expression until the matching '(' is found.
                    6. If an operator is scanned,
                        a. If the stack is empty or the stack top is '(' or the precedence of the scanned operator is greater than the precedence of the stack top, push the scanned operator on the stack.
                        b. Else pop from the stack and add to the postfix expression until the precedence of the scanned operator is greater than the precedence of the stack top.
                    7. Repeat steps 2 to 6 until the infix expression is scanned completely.
                    8. Print the postfix expression.

*/

const infixToPostfix = (expression) => {
  let postfixExp = "";

  const precedence = { "^": 3, "*": 2, "/": 2, "+": 1, "-": 1 };
  const stack = [];

  for (let char of expression) {
    // add operands
    if (/[A-Za-z0-9]/.test(char)) postfixExp += char;
    // push the ( always
    else if (char == "(") stack.push(char);
    // if we get the closing one pop out and add the operator in stack to postfix Expression until we get the closing )
    else if (char == ")") {
      while (stack.length && stack[stack.length - 1] !== "(")
        postfixExp += stack.pop();
      stack.pop(); // remove the "("
    }
    // check the precedence, stack should have, Higher on Top of Stack, we not PopOut add to Postfix Expression
    else {
      while (
        stack.length &&
        precedence[char] <= precedence[stack[stack.length - 1]]
      ) {
        postfixExp += stack.pop();
      }
      stack.push(char);
    }
  }

  // if the Infix Expression traversal finish, and we still have operator in stack we add them all in PostFix Expression
  while (stack.length) postfixExp += stack.pop();

  return postfixExp;
};

let infix = "a+b*(c^d-e)^(f+g*h)-i";
let postfix = infixToPostfix(infix);
console.log("Infix--To--Postfix", postfix);
