/*
Example 1:
Input Format:
 N = 3, M = 27
Result:
 3
Explanation:
 The cube root of 27 is equal to 3.
*/

// using linear search
const expo = (i, n) => {
  return Math.pow(i, n);
};

// linear search
const nthRoot = (n, m) => {
  for (let i = 0; i <= m; i++) {
    if (expo(i, n) == m) return i;
    else if (expo(i, n) > m) break;
  }
  return -1;
};
console.log("Using linear", nthRoot(3, 27));

// using BS
const nthRoot_usingBS = (n, m) => {
  let low = 0;
  let high = m;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (expo(mid, n) == m) return mid;
    else if (expo(mid, n) > m) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};
console.log("Using Binary Search", nthRoot_usingBS(3, 27));
