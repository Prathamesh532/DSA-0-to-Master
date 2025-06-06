/*

Postfix Expression:- AB+CD-*
Infix Expression:- (A+B)*(C-D)

Postfix to Infix:-  1. Read the Postfix expression from left to right
                    2. If the symbol is an operand, then push it onto the Stack
                    3. If the symbol is an operator, then pop two operands from the Stack 
                    4. Create a string by concatenating the two operands and the operator between them. 
                       string = (operand2 + operator + operand1) 
                    5. And push the resultant string back to Stack
                    6. Repeat the above steps until the end of Postfix expression.
                    7. At the end stack will have only 1 string i.e resultant string

*/

// To check if char is operator
const isOperator = (char) => "+-*/^".includes(char);

// To check if char is operand
const isOperands = (char) => /[A-Za-z0-9]/.test(char);

const postfiToInfix = (expression) => {
  // store the postfix expression
  let stack = [];

  // run loop from left to right
  for (let char of expression) {
    // check if operands, if yes push to stack
    if (isOperands(char)) stack.push(char);
    // check operators, if yes take 2 operands from stack and place like (operand2 + operator + operand1), then push to stack
    else if (isOperator(char)) {
      let pop_1 = stack.pop();
      let pop_2 = stack.pop();

      let exp = `(${pop_2}${char}${pop_1})`;
      stack.push(exp);
    }
  }

  return stack.pop();
};

const expression = "abc++";
const infix = postfiToInfix(expression);
console.log("Postfix: ", expression);
console.log("Infix:  ", infix);
