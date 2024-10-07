let arr = [1, 2, 4, 5];
let N = 5;

const b_findMissingNo = (arr, N) => {
  for (let i = 1; i <= N; i++) {
    let flag = 0;
    for (let j = 0; j < N - 1; j++) {
      if (arr[j] == i) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) return i;
  }
  return -1;
};

let ans = b_findMissingNo(arr, N);
console.log("ans", ans);

// hashing

// optimal
let sumation = (N * (N + 1)) / 2;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log("optimal ans", sumation - sum);
