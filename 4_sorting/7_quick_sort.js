// [.....] given array pick the pivot (it can be ani element / index , 1th , last , mid , random)
// place the pivot element in right order / place
// 1 - put the low poniter(i) that 0th index and high (j) on last index
// 2 - find the gretest element of pivot put the i pointer on it then,
// 3 - fing the lowest element of pivot put the j pointer
// 4 - if we find the lower and grestest swap it i and j
// do again 2 ,3 ,4 untill the j passes the i
// put the arr[pivot] to arr[j]
// call the sort again with --> low , partition - 1  && partition + 1 , high

let arr = [5, 4, 3, 2, 1];
// 1 , 4, 3 ,2 ,5 // parIndex = 4
// 1 , 4, 3 ,2 ,5 // 1 , 4, 3 ,2 left will call again
// 1 , 4, 3 ,2 // parIndex = 3
// 4, 3, 2 // 2 , 3 , 4 parIndex = 1

let n = arr.length - 1;

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function pivot(arr, low, high) {
  let pivotEle = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivotEle && i <= high) i++;
    while (arr[j] > pivotEle && j >= low) j--;
    if (i < j) {
      console.log("inside while swap ,", "j", j, "i", i);
      swap(arr, j, i);
    }
  }
  // Swap the pivot element with the element at index j to place the pivot in its correct position
  console.log("outside while swap ,", "j", j, "low", low);
  swap(arr, low, j);
  return j;
}

function quick_sort(arr, low, high) {
  if (low < high) {
    let partition_Index = pivot(arr, low, high);
    console.log("partition_Index", partition_Index);
    quick_sort(arr, low, partition_Index - 1);
    quick_sort(arr, partition_Index + 1, high);
  }
}

quick_sort(arr, 0, n);

console.log("quick sort: ", arr);
