let a = [1, 2, 2, 3, 4, 5];
let b = [2, 2, 3, 4, 4, 5, 6];
let ans = [];
let visited = new Array(b.length).fill(0);

// brute force ---> O(n*m)
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    if (a[i] == b[j] && visited[j] == 0) {
      ans.push(a[i]);
      visited[j] = 1;
      break;
    }
    if (b[j] > a[i]) break;
  }
}

// 2 pointer --> T.C == O(n+m)
const findIntersection = (a, b) => {
  let i = 0;
  let j = 0;
  let ans = [];
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      i++;
    } else if (b[j] < a[i]) {
      j++;
    } else {
      ans.push(a[i]);
      i++;
      j++;
    }
  }
  return ans;
};
let ans1 = findIntersection(a, b);
console.log("ans", ans);
console.log("ans1", ans1);
