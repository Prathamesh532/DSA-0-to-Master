/*

redundant bracket or not
Given a string of balanced expressions, find if it contains a redundant parenthesis or not. Print 'Yes' if redundant, else 'No'.
What are Redundant Parentheses?

Examples: 

Input: s = "((a+b))"
Output: True
Explanation: ((a+b)) can reduced to (a+b), this Redundant

Input: s = "(a+(b)/c)"
Output: False
Explanation: (a+(b)/c) can reduced to (a+b/c) because b is surrounded by () which is redundant.

*/

const isOperator = (ch) => "+-*/^".includes(ch);

const checkRedundancy = (str) => {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ")") {
      let top = stack.pop();
      let operatorFound = false;

      while (top !== "(") {
        if (isOperator(top)) operatorFound = true;
        top = stack.pop();
      }

      if (!operatorFound) return "YES";
    } else stack.push(str[i]);
  }

  return "NO";
};

const str = "(a+b)";
const check = checkRedundancy(str);
console.log(check);
