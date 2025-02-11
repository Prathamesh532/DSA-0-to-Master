// brute force
const subarraysWithKDistinct = (arr, k) => {
  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    let hashMap = new Map();
    for (let j = i; j < arr.length; j++) {
      hashMap.set(arr[j], (hashMap.get(arr[j]) || 0) + 1);
      if (hashMap.size == k) cnt++;
    }
  }

  return cnt;
};

// using 2-pointer/sidling-window
const subarraysWithKDistinct_ = (arr, k) => {
  if (k < 0) return 0;
  let left = 0;
  let right = 0;
  let count = 0;

  let hashMap = new Map();

  while (right < arr.length) {
    hashMap.set(arr[right], (hashMap.get(arr[right]) || 0) + 1);

    while (hashMap.size > k) {
      hashMap.set(arr[left], (hashMap.get(arr[left]) || 0) - 1);
      if (hashMap.get(arr[left]) === 0) hashMap.delete(arr[left]);
      left++;
    }

    count = count + (right - left + 1);
    right++;
  }

  return count;
};

let arr = [1, 2, 1, 2, 3];
let k = 2;
// const check = subarraysWithKDistinct(arr, k);
const check =
  subarraysWithKDistinct_(arr, k) - subarraysWithKDistinct_(arr, k - 1);
console.log(check);
