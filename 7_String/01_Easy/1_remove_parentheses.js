let str = "(()())(())";

const removeParentheses = (str) => {
  let n = str.length;
  let cnt = 0;

  let start = 0;
  let result = "";

  for (let i = 0; i < n; i++) {
    if (str[i] == "(") cnt++;
    else cnt--;

    if (cnt == 0) {
      result += str.slice(start + 1, i);
      start = i + 1;
    }
  }
  return result;
};

console.log("removeParentheses", removeParentheses(str));
