let s = "(1+(2*3)+((8)/4))+1";

const isValidParathesis = () => {
  let currentDepth = 0;
  let maxDepth = 0;

  for (const char of s) {
    if (char == "(") {
      currentDepth += 1;
      maxDepth = Math.max(maxDepth, currentDepth);
    } else if (char == ")") {
      currentDepth -= 1;
    }
  }
  return maxDepth;
};
console.log("isValidParathesis", isValidParathesis(s));
