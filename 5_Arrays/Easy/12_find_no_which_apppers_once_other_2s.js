let arr = [4, 1, 2, 1, 2, 4, 5];

// navie / brute force using linear search --> O(n^2)
// for (let i = 0; i < arr.length; i++) {
//   let ele = arr[i];
//   let cnt = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] == ele) {
//       cnt++;
//     }
//   }
//   if (cnt == 1) return ele;
//   return -1;
// }

// better solution ---> O(N*logM) + O(n)
let mapp = new Map();
for (let x of arr) {
  if (mapp.has(x)) {
    mapp.set(x, mapp.get(x) + 1);
  } else {
    mapp.set(x, 1);
  }
}
let ans = 0;
for (let [key, value] of mapp) {
  if (value == 1) {
    ans = key;
    break;
  }
}
console.log("ans", ans);

// optimal solution --> XOR --> O(N)
let xor = 0;
for (let i = 0; i < arr.length; i++) {
  xor = xor ^ arr[i];
}
console.log("xor ans", xor);

function findNoAppearsOnces(arr) {}
