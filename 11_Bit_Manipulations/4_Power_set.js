const powerSet = (arr) => {
  let n = arr.length;
  let subSetLen = 1 << n;

  let ans = [];

  for (let i = 0; i < subSetLen; i++) {
    let list = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        list.push(arr[j]);
      }
    }
    ans.push(list);
  }

  return ans;
};

console.log(powerSet([1, 2, 3]));
