let arr = [2, 5, 1, 3, 0];

let largest = -Infinity;

// navie approch --->  O(N*log(N))
console.log(arr.sort((a, b) => a - b));

// findng the largest elements ---> Burte Force ---> O(n)
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }

largestEle(arr, arr[0], arr[1]);
console.log("largest :", largest);
