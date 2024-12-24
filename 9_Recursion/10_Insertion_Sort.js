const Insertion = (arr, size) => {
  // base case
  if (size == 1 || size == 0) return;

  Insertion(arr, size - 1);

  let lastEle = arr[size - 1];
  let j = size - 2;

  while (j >= 0 && arr[j] > lastEle) {
    arr[j + 1] = arr[j];
    j--;
  }

  arr[j + 1] = lastEle;
};

let arr = [12, 11, 13, 5, 6];
const check = Insertion(arr, 5);
console.log(arr);
