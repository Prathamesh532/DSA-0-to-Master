/*
Prefix to Infix Expression:- 
E.g.:- Prefix Expression :- *+AB-CD
       Infix Expression :- (A+B)*(C-D)


Prefix to Infix Expression:-1 Read the Prefix expression in reverse order (from right to left)
                            2. If the symbol is an operand, then push it onto the Stack
                            3. If the symbol is an operator, then pop two operands from the Stack 
                            4. Create a string by concatenating the two operands and the operator between them. 
                               string = (operand1 + operator + operand2) 
                            5. And push the resultant string back to Stack
                            6. Repeat the above steps until the end of Prefix expression.
                            7. At the end stack will have only 1 string i.e resultant string
*/

const isOperator = (ch) => "+-*/^".includes(ch);

const prefixToInfix = (expression) => {
  const stack = [];

  let l = expression.length - 1;

  // run loop from right to left  <----
  for (let i = l; i >= 0; i--) {
    let char = expression[i];

    // check if operands, if yes push to stack
    if (/[A-Za-z0-9]/.test(char)) {
      stack.push(char);
    }
    // check operators, if yes take 2 operands from stack and place like (operand1 + operator + operand2), then push to stack
    else if (isOperator(char)) {
      let pop_1 = stack.pop();
      let pop_2 = stack.pop();

      const exp = `(${pop_1}${char}${pop_2})`;
      stack.push(exp);
    }
  }

  return stack.pop();
};

const prefix = "*+AB-CD";
const infix = prefixToInfix(prefix);
console.log("Prefix: ", prefix);
console.log("Infix:  ", infix);
