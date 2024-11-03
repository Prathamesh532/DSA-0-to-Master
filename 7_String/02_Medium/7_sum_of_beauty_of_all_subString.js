let str = "aabcbaa";

// brute force
// helper function
const getMinFreq = (arr) => {
  let min = Infinity;
  for (let i = 0; i < 26; i++) {
    if (arr[i] > 0) min = Math.min(min, arr[i]);
  }
  return min;
};

const getMaxFreq = (arr) => {
  let max = -Infinity;
  for (let i = 0; i < 26; i++) max = Math.max(max, arr[i]);
  return max;
};

// **** there no other soultion which reduce time complexity

// overall Time Complexity ---> O(n^2)
const sumOfBeauty = (str) => {
  let n = str.length;
  let res = 0;

  for (let i = 0; i < n; i++) {
    let subString = new Array(26).fill(0);
    for (let j = i; j < n; j++) {
      let char = str[j].charCodeAt() - "a".charCodeAt();
      subString[char]++;
      let beauty = getMaxFreq(subString) - getMinFreq(subString);
      res += beauty;
    }
  }

  return res;
};
console.log("brute force", sumOfBeauty(str));
