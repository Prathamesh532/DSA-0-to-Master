let arr = [5, 4, 3, 2, 56, 1, 1];
let n = arr.length;

function recursive_insertion_sort(arr, i, n) {
  if (i == n) return;
  let j = i;
  while (j > 0 && arr[j - 1] > arr[j]) {
    let temp = arr[j - 1];
    arr[j - 1] = arr[j];
    arr[j] = temp;
    j--;
  }

  recursive_insertion_sort(arr, i + 1, n);
}

recursive_insertion_sort(arr, 0, n);

console.log("arr", arr);
