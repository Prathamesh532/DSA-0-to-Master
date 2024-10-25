let arr1 = [2, 3, 6, 7, 9];
let arr2 = [1, 4, 8, 10];

// brute force
function bruteForce(arr1, arr2, k) {
  let arr = [...arr1, ...arr2];
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}
console.log("bruteForce", bruteForce(arr1, arr2, 5));

// optimal solution
const findkthElement_usingBS = (arr1, arr2, k) => {
  let n1 = arr1.length;
  let n2 = arr2.length;

  if (n1 > n2) return findkthElement_usingBS(arr2, arr1, k);

  let low = Math.max(0, k - n2);
  let high = Math.min(k, n2);

  let left = k;

  while (low <= high) {
    let mid1 = Math.floor((low + high) / 2);
    let mid2 = left - mid1;

    let l1 = Number.MIN_SAFE_INTEGER;
    let l2 = Number.MIN_SAFE_INTEGER;
    let r1 = Number.MAX_SAFE_INTEGER;
    let r2 = Number.MAX_SAFE_INTEGER;
    if (mid1 < n1) r1 = arr1[mid1];
    if (mid2 < n2) r2 = arr2[mid2];
    if (mid1 - 1 >= 0) l1 = arr1[mid1 - 1];
    if (mid2 - 1 >= 0) l2 = arr2[mid2 - 1];
    if (l1 <= r2 && l2 <= r1) {
      return Math.max(l1, l2);
    } else if (l1 > r2) {
      high = mid1 - 1;
    } else {
      low = mid1 + 1;
    }
  }
  return 0;
};
console.log("using BS", findkthElement_usingBS(arr1, arr2, 5));
