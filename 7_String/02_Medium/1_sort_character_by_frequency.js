let s = "Aabb";

const frequencySort = (s) => {
  let frequency = {};
  for (let char of s) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  let sortedArr = Object.keys(frequency).sort((a, b) => {
    return frequency[b] - frequency[a];
  });

  return sortedArr.map((char) => char.repeat(frequency[char])).join("");
};
console.log(frequencySort(s));

// Using Bucket Sort for Optimal Performance ---> O(n + d).
const bucketSort = (s) => {
  const frequency = {};
  let maxFreq = 0;

  for (let char of s) {
    frequency[char] = (frequency[char] || 0) + 1;
    maxFreq = Math.max(maxFreq, frequency[char]);
  }

  let bucket = Array.from({ length: maxFreq + 1 }).map(() => []);
  for (let char in frequency) {
    bucket[frequency[char]].push(char);
  }
  console.log("bucket", bucket);
  console.log("maxFreq", maxFreq);

  let result = "";
  for (let i = maxFreq; i > 0; i--) {
    for (const char of bucket[i]) result += char.repeat(i);
  }
  return result;
};
console.log(bucketSort(s));
