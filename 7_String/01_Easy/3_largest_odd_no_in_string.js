let str = "10133890";

const largestOdd = (str) => {
  let n = str.length;
  if (Number(str) % 2 !== 0) return Number(str);

  let ans = "";

  for (let i = 0; i < n; i++) {
    if (Number(str[i]) % 2 !== 0) {
      ans = Math.max(ans, Number(str[i]));
    }
  }
  return ans;
};

// for big string value
const largestOddV2 = (str) => {
  let n = str.length;
  for (let i = n - 1; i >= 0; i--) {
    if (Number(str[i]) % 2 !== 0) {
      return str.substring(0, i + 1);
    }
  }
  return "";
};
console.log("largest odd", largestOddV2(str));
