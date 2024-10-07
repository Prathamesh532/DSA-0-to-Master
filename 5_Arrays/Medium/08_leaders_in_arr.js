let arr = [4, 7, 1, 0];

// brute force ---> near about O(N^2) , S.C = O(N)
function findLeaders(arr) {
  let temp = [];
  let j = 1;
  for (let i = 0; i < arr.length; i++) {
    let leader = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        leader = false;
        break;
      }
    }
    if (leader) temp.push(arr[i]);
  }
  return temp;
}

let leaders = findLeaders(arr);
console.log("leader brute : ", leaders);

// optimal apporach ---> O(N)
const optimalLeaderFinder = (arr) => {
  let max = -Infinity;
  let n = arr.length - 1;
  let leader = [];
  for (let i = n; i >= 0; i--) {
    if (arr[i] > max) {
      leader.push(arr[i]);
    }
    max = Math.max(max, arr[i]);
  }
  return leader;
};

let ans = optimalLeaderFinder(arr);
console.log("ans", ans);
