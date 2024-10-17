let arr = [5, 5, 5, 5];

// helper function
const countPainters = (arr, time) => {
  let painterCnt = 1;
  let timeStart = 0;

  for (let i = 0; i < arr.length; i++) {
    if (timeStart + arr[i] <= time) {
      timeStart += arr[i];
    } else {
      painterCnt++;
      timeStart = arr[i];
    }
  }
  return painterCnt;
};

// painter partition
const painter_partition = (boards, k) => {
  let sumOfboards = 0;
  for (let i = 0; i < boards.length; i++) sumOfboards += boards[i];

  let low = Math.max(...boards);
  let high = sumOfboards;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let painters = countPainters(boards, mid);
    if (painters <= k) high = mid - 1;
    else low = mid + 1;
  }
  return low;
};

console.log("Painter partition ", painter_partition(arr, 2));
