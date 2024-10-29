let s = "rat";
let t = "car";

// brute force ---> ` O(N) + O(log N)
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  return s.split("").sort().join("") == t.split("").sort().join("");
};
console.log("isAnagram", isAnagram(s, t));

// optimal solution ---> O(N)
const isAnagram_optimal = (s, t) => {
  if (s.length !== t.length) return false;
  let count = [];

  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }

  return Object.values(count).every((val) => val === 0);
};
console.log("isAnagram_optimal", isAnagram_optimal(s, t));
