let sqrt = Math.floor(Math.sqrt(36));
console.log("using build in function sqrt", sqrt);

// using BS
const usingBS = (n) => {
  let low = 1;
  let high = n;
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (mid * mid == n) {
      ans = mid;
    }
    if (mid * mid >= n) {
      high = mid - 1;
    } else {
      ans = mid;
      low = mid + 1;
    }
  }
  return high; // also return ans
};
console.log("using BS", usingBS(144));
