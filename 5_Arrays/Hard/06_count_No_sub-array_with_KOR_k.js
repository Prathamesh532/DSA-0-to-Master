let arr = [5, 6, 7, 8, 9];

// brute force  ---> O(N^3)
function bruteForce(arr, XOR) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum = sum ^ arr[k];
      }
      if (sum == XOR) {
        count++;
      }
    }
  }
  return count;
}
let bruteAns = bruteForce(arr, 6);
console.log("Brute Ans :", bruteAns);

// better solution ---> O(N^2)
function betterSoltion(arr, k) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let XORR = 0;
    for (let j = i; j < arr.length; j++) {
      XORR ^= arr[j];
      if (XORR == k) count++;
    }
  }
  return count;
}
let betterAns = betterSoltion(arr, 6);
console.log("Better Ans :", betterAns);

// optimal ---> O(N) ,, S.C == O(N)
function OptimalSolution(arr, k) {
  let map = new Map();
  let count = 0;
  map.set(0, 1);
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor ^= arr[i];
    let x = xor ^ k;
    count = map.get(x) || 0;
    map.set(xor, (map.get(x) || 0) + 1);
  }
  return count;
}
let optimalAns = OptimalSolution(arr, 6);
console.log("Better Ans :", optimalAns);
