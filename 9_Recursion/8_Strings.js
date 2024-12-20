function reverseString(str, i, j) {
  // base case
  if (i >= j) return;

  [str[i], str[j]] = [str[j], str[i]];
  i++;
  j--;
  reverseString(str, i, j);
}

let str = "hello";
let strArray = str.split(""); // Convert string to array
reverseString(strArray, 0, strArray.length - 1); // Call the function
const reversedStr = strArray.join(""); // Join array back to string
console.log(reversedStr); // Output: "olleh"

function isPalindrome(str, i, j) {
  // base case
  if (i > j) return true;

  if (str[i] !== str[j]) return false;
  else return isPalindrome(str, i + 1, j - 1);
}

let str1 = "abbax";
let str1Arr = str1.split("");
let check = isPalindrome(str1Arr, 0, str1.length - 1);
console.log(check);
