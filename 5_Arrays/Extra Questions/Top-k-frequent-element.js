let arr = [1, 2, 2, 3, 3, 3];

//By Sorting  ----> T.C == O(N) + O(log N) , S.C == O(M)
const topKFrequent = (nums, k) => {
  let cnt = {};

  for (let i = 0; i < nums.length; i++) cnt[nums[i]] = (cnt[nums[i]] || 0) + 1;

  // Make a array
  let proccessed = Object.entries(cnt);
  // make ["val" , freq] ---> [Number(val) , freq] && swap the position [val , fres] --> [freq , val]
  proccessed = proccessed.map(([val, freq]) => [freq, Number(val)]);
  // sort
  proccessed.sort((a, b) => b[0] - a[0]);
  // slice --> to length of k
  proccessed = proccessed.slice(0, k);
  // maping and return the element

  return proccessed.map((val) => val[1]);
};

console.log(topKFrequent(arr, 2));

// Bucket Sort for Top K Frequent Elements
const using_bucketSort = (arr, k) => {
  let cnt = new Map(); // Map to count frequencies
  let bucketArr = []; // Bucket array

  // Step 1: Count frequencies
  for (const n of arr) cnt.set(n, (cnt.get(n) || 0) + 1);

  // Step 2: Create buckets
  for (const [val, freq] of cnt) {
    // Initialize the bucket if it doesn't exist
    if (!bucketArr[freq]) bucketArr[freq] = [];
    bucketArr[freq].push(val); // Add value to the bucket for its frequency
  }

  // Step 3: Retrieve top K frequent elements
  let res = [];
  for (let i = bucketArr.length - 1; i >= 0 && res.length < k; i--) {
    if (bucketArr[i]) {
      res.push(...bucketArr[i]); // Add elements from the bucket to the result
    }
  }

  return res.slice(0, k); // Ensure only K elements are returned
};
console.log(using_bucketSort(arr, 2));
