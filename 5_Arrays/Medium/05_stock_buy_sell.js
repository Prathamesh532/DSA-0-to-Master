let arr = [7, 6, 8, 5, 4, 10];

// brute force ---> O(N) + O(N) = O(N).
function maxProfit(arr) {
  let minPrice = Infinity;
  let maxProfit = -Infinity;
  let minIndex;
  for (let i = 0; i < arr.length; i++) {
    if (minPrice > arr[i]) {
      minPrice = arr[i];
      minIndex = i;
    }
  }
  for (let i = minIndex; i < arr.length; i++) {
    if (maxProfit < arr[i]) {
      maxProfit = arr[i];
    }
  }
  return { minIndex, minPrice, ans_MAX_PROFIT: maxProfit - minPrice };
}

// optima ---> O(N)
const optimalMaxProfit = (arr) => {
  let maxProfit = -Infinity;
  let minPrice = Infinity;
  for (let i = 0; i < arr.length; i++) {
    minPrice = Math.min(minPrice, arr[i]);
    maxProfit = Math.max(maxProfit, arr[i] - minPrice);
  }
  return maxProfit;
};

let a = optimalMaxProfit([7, 1, 5, 3, 6, 4]);
console.log(a);
