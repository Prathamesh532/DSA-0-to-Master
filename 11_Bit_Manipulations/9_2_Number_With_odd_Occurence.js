const twoOddNumber = (arr) => {
  let ans = [];
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  for (let [key, freq] of map) {
    if (freq % 2 !== 0) ans.push(key);
  }

  return ans.sort((a, b) => b - a);
};

const twoOddNumber2 = (arr) => {
  let xor = 0;
  for (let num of arr) xor ^= num;

  let rightSetBit = xor & -xor;

  let x = 0,
    y = 0;

  for (let num of arr) {
    if (num & rightSetBit) x ^= num;
    else y ^= num;
  }

  return x > y ? [x, y] : [y, x];
};

let arr = [4, 2, 4, 5, 2, 3, 3, 1];
const check = twoOddNumber2(arr);
console.log("check", check);
