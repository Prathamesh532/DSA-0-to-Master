const reverseString = (str) => {
  let stack = [];
  let result = "";

  // Step 1: Push words into the stack
  let words = str.split(" ");
  for (let word of words) {
    stack.push(word);
  }

  // Step 2: Pop words and build reversed sentence
  while (stack.length > 0) {
    result += stack.pop() + " ";
  }

  result = result.trim(); // Remove trailing space

  return result;
};

let str = "I Love To Code";
console.log(reverseString(str));
