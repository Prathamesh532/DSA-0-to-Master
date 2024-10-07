let arr = [2, 0, 0, 0, 0, 3];
let n = arr.length;
let K = 5;

//brute force ---> O(N^3)
let maxLen = 0;
// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     for (let k = i; k <= j; k++) {
//       let sum = 0;
//       sum += arr[k];
//       if (sum == K) {
//         maxLen = Math.max(maxLen, j - i);
//       }
//     }
//   }
// }

// narrow down ---> some where O(n^2)
for (let i = 0; i < n; i++) {
  let sum = 0;
  for (let j = i; j < n; j++) {
    sum += arr[j];
    if (sum == K) {
      maxLen = Math.max(maxLen, j - i + 1);
    }
  }
}
console.log(maxLen);

// better using hashing preFix sum ---> optimal for -ve also ---> T.C --> O(N * log N)
const prefixSumHashing = (arr, k) => {
  let mapp = new Map();
  let len = 0;
  let sum = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum == k) {
      len = Math.max(len, i + 1);
    }
    let rem = sum - k;
    if (mapp.has(rem)) {
      let l = i - mapp.get(rem);
      len = Math.max(len, l);
    }

    if (!mapp.has(sum)) {
      mapp.set(sum, i);
    }
  }
  return len;
};

let a = prefixSumHashing(arr, 3);
console.log("a", a);

// optimal solution ---> optimal for +ve ---> T.C O(2N )
const twoPointer = (arr, k) => {
  let n = arr.length;
  let sum = arr[0];
  let len = 0;
  let left = 0;
  let right = 0;
  while (right < n) {
    while (left <= right && sum > k) {
      sum -= arr[left];
      left++;
    }
    if (sum == k) {
      len = Math.max(len, right - left + 1);
    }
    right++;
    if (right < n) {
      sum += arr[right];
    }
  }
  return len;
};

let optimalA = twoPointer(arr, 3);
console.log("optimalA", optimalA);
