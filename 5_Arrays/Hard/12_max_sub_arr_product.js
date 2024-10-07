let arr = [1, 2, -3, 0, -4, -5];

// brute force ---> O(N^2)
function brute(arr) {
  let maxProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    let pro = 1;
    for (let j = i; j < arr.length; j++) {
      pro *= arr[j];
      maxProduct = Math.max(maxProduct, pro);
    }
  }
  return maxProduct;
}

let bruteAns = brute(arr);
console.log("Brute Ans:", bruteAns);

// optimal solution ----> O(N)
function optimal(arr) {
  let max = -Infinity;
  let preFix = 1;
  let suFix = 1;

  for (let i = 0; i < arr.length; i++) {
    if (preFix == 0) preFix = 1;
    if (suFix == 0) suFix = 1;

    preFix *= arr[i];
    suFix *= arr[arr.length - i - 1];

    max = Math.max(max, Math.max(preFix, suFix));
  }

  return max;
}

let OptimalAns = optimal(arr);
console.log("optimal Ans:", OptimalAns);
