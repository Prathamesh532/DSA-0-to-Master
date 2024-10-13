let arr = [3, 4, 4, 7, 8, 10];

/*
floor ---> the largets element in array which is SMALLER OR EQUAL <= TO THE GIVEN "X"
celi ---> the smallest element in array which is GREATER OR EQUAL >= TO THE GIVEN "X"
*/

// finding floor
const findFloor = (arr, x) => {
  let n = arr.length;
  let low = 0,
    high = n - 1;
  let floor = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= x) {
      floor = arr[mid];
      low = mid + 1;
    } else high = mid - 1;
  }

  return floor;
};

// finding celi
const findCeli = (arr, x) => {
  let n = arr.length;
  let low = 0,
    high = n - 1;
  let celi = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= x) {
      celi = arr[mid];
      high = mid - 1;
    } else low = mid + 1;
  }

  return celi;
};

/* 
Time Complexity --> O(log2 N) for both solution
*/

let floorCeli = [findFloor(arr, 9), findCeli(arr, 9)];

console.log("The Floor and celi of", arr, "is ---> ", floorCeli);
