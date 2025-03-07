const singleNumber = (arr) => {
  let hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    hashMap.set(arr[i], (hashMap.get(arr[i]) || 0) + 1);
  }
  let ans = [];
  for (let [key, value] of hashMap) {
    if (value === 1) ans.push(key);
  }
  return ans;
};

const singleNumber_ = (arr) => {
  let xor = 0;
  for (let num of arr) xor ^= num;

  let rightSetBit = (xor & (xor - 1)) ^ xor;

  let x = 0,
    y = 0;

  for (let num of arr) {
    if (num & rightSetBit) x ^= num;
    else y ^= num;
  }

  return [x, y];
};

let arr = [1, 2, 1, 3, 2, 5];
const check = singleNumber_(arr);
console.log(check);
