let str = "MADSAM";
let n = str.length;
console.log("n", n);

const checkStrPalindrome = (i) => {
  if (i >= Math.floor(n / 2)) return true;
  if (str[i] != str[n - i - 1]) return false;
  return checkStrPalindrome(i + 1);
};

let a = checkStrPalindrome(0);
console.log(a);
