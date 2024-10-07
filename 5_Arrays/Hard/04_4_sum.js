let arr = [1, 0, -1, 0, -2, 2];

// brute force ---> O(N^4) , S.C == O(N) + O(N)
function bruteForce(arr, target) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        for (let l = k + 1; l < arr.length; l++) {
          let sum = arr[i] + arr[j] + arr[k] + arr[l];
          if (sum == target) {
            let temp = [arr[i], arr[j], arr[k], arr[l]];
            temp.sort((a, b) => a - b);
            ans.push(temp);
          }
        }
      }
    }
  }

  let set = new Set(ans.map(JSON.stringify));
  ans = Array.from(set).map(JSON.parse);
  return ans;
}

let bruteAns = bruteForce(arr, 0);
console.log("brute Ans", bruteAns);

// better using hashing
function usingHashing(nums, target) {
  let n = nums.length;
  let set = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let hashset = new Set();
      for (let k = j + 1; k < n; k++) {
        let sum = nums[i] + nums[j];
        sum += nums[k];
        let fourth = target - sum;
        if (hashset.has(fourth)) {
          let temp = [nums[i], nums[j], nums[k], fourth];
          temp.sort((a, b) => a - b);
          set.add(JSON.stringify(temp));
        }
        hashset.add(nums[k]);
      }
    }
  }

  let ans = Array.from(set).map(JSON.parse);
  return ans;
}

let betterAns = usingHashing(arr, 0);
console.log("better Ans", betterAns);

// optimal
function optimal(arr, target) {
  let n = arr.length;
  arr.sort((a, b) => a - b);

  let ans = [];

  for (let i = 0; i < n; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) continue;
    for (let j = i + 1; j < n; j++) {
      if (j > i + 1 && arr[j] == arr[j - 1]) continue;
      let k = j + 1;
      let l = n - 1;
      while (k < l) {
        let sum = arr[i] + arr[j] + arr[k] + arr[l];
        if (sum > target) {
          l--;
        } else if (sum < target) {
          k++;
        } else {
          let temp = [arr[i], arr[j], arr[k], arr[l]];
          ans.push(temp);
          k++;
          l--;
          while (k < l && arr[k] == arr[k - 1]) k++;
          while (k < l && arr[l] == arr[l + 1]) l--;
        }
      }
    }
  }

  return ans;
}

let optimalAns = optimal(arr, 0);
console.log("Optimal ans", optimalAns);
