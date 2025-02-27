const singleNumber = (nums) => {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i];
  }
  return ans;
};

let arr = [1, 2, 2];
const check = singleNumber(arr);
console.log(check);
