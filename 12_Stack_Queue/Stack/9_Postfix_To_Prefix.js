/*

Postfix Expression :- AB+CD-*
Prefix Expression :- *+AB-CD

Postfix to Prefix:- 1. Read the Postfix expression from left to right
                    2. If the symbol is an operand, then push it onto the Stack
                    3. If the symbol is an operator, then pop two operands from the Stack 
                    4. Create a string by concatenating the two operands and the operator before them. 
                       string = operator + operand2 + operand1 
                    5. And push the resultant string back to Stack
                    6. Repeat the above steps until end of Postfix expression.

*/

// To check if char is operator
const isOperator = (char) => "+-*/^".includes(char);

// To check if char is operand
const isOperands = (char) => /[A-Za-z0-9]/.test(char);

const postfixToPrefix = (expression) => {
  // store the postfix expression
  let stack = [];

  // run loop from left to right
  for (let char of expression) {
    // check if operands, if yes push to stack
    if (isOperands(char)) stack.push(char);
    // check operators, if yes take 2 operands from stack and place like (operator + operand2 + operand1), then push to stack
    else if (isOperator(char)) {
      let pop_1 = stack.pop();
      let pop_2 = stack.pop();

      let exp = `${char}${pop_2}${pop_1}`;
      stack.push(exp);
    }
  }

  return stack.pop();
};

const expression = "AB+CD-*";
const prefix = postfixToPrefix(expression);
console.log("Postfix: ", expression);
console.log("Prefix:  ", prefix);