const isPalindrome = (str, start, end) => {
  while (start <= end) {
    if (str[start++] !== str[end--]) return false;
  }
  return true;
};

const palindromePartition = (str, index, output, ans) => {
  // base case
  if (index === str.length) {
    ans.push([...output]);
    return;
  }

  for (let i = index; i < str.length; i++) {
    if (isPalindrome(str, index, i)) {
      output.push(str.slice(index, i + 1));
      palindromePartition(str, i + 1, output, ans);
      output.pop();
    }
  }
};

const main = (str) => {
  let ans = [];
  let output = [];
  palindromePartition(str, 0, output, ans);
  return ans;
};

const check = main("aab");
console.log(check);
