/* 

Prefix Expression :- *+AB-CD
Postfix Expression :- AB+CD-*


Prefix to Postfix:- 1. Read the Prefix expression in reverse order (from right to left)
                    2. If the symbol is an operand, then push it onto the Stack
                    3. If the symbol is an operator, then pop two operands from the Stack 
                    4. Create a string by concatenating the two operands and the operator after them. 
                       string = operand1 + operand2 + operator 
                    5. And push the resultant string back to Stack
                    6. Repeat the above steps until end of Prefix expression


*/

// To check if char is operator
const isOperator = (char) => "+-*/^".includes(char);

// To check if char is operand
const isOperands = (char) => /[A-Za-z0-9]/.test(char);

const prefixToPostfix = (expression) => {
  // store the postfix expression
  const stack = [];
  const len = expression.length - 1;

  // run loop from right to left
  for (let i = len; i >= 0; i--) {
    let char = expression[i];

    // check if operands, if yes push to stack
    if (isOperands(char)) stack.push(char);
    // check operators, if yes take 2 operands from stack and place like (operand1 + operator + operand2), then push to stack
    else if (isOperator(char)) {
      let pop_1 = stack.pop();
      let pop_2 = stack.pop();

      let exp = `${pop_1}${pop_2}${char}`;
      stack.push(exp);
    }
  }

  return stack.pop();
};

const expression = "*-A/BC-/AKL";
const postfix = prefixToPostfix(expression);
console.log("Prefix:-", expression);
console.log("Postfix:-", postfix);
