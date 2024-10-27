const reverseString = (s) => {
  let str = s.split(" ");

  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    [str[left], str[right]] = [str[right], str[left]];
    left++;
    right--;
  }
  return str.join(" ");
};
let s = "the sky is blue";

let reverse = reverseString(s);
console.log(reverse);
