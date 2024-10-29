let str = ["flower", "flow", "flight"];

// brute solution
const longestCommonPrefix = (str) => {
  let n = str.length;
  let result = "";

  for (let i = 0; i < str[0].length; i++) {
    let char = str[0][i];

    for (let j = 1; j < n; j++) {
      if (str[j][i] !== char) {
        return result;
      }
    }
    result += char;
  }
  return result;
};
console.log("Brute solution", longestCommonPrefix(str));

// optimal
const longestCommonPrefix_optimal = (str) => {
  str.sort();
  let first = str[0];
  let last = str[str.length - 1];
  let ans = "";
  let i = 0;
  while (first[i] === last[i] && i < first.length) i++;
  return first.substring(0, i);
};
console.log("Optimal solution", longestCommonPrefix_optimal(str));
