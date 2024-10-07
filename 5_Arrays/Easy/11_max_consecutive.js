let arr = [1, 1, 0, 1, 1, 1];

const findMaxConsecutive = (arr) => {
  let maxi = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) count++;
    else {
      maxi = Math.max(maxi, count);
      count = 0;
    }
  }
  maxi = Math.max(maxi, count);
  return maxi;
};
let maxi = findMaxConsecutive(arr);
console.log("ans", maxi);
