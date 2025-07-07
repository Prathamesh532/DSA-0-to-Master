class Queue {
  constructor() {
    this.element = [];
  }

  // enqueue
  enqueue(value) {
    this.element.push(value);
  }

  // dequeue
  dequeue() {
    if (this.element.length == 0) return null;
    return this.element.shift();
  }

  // peek / front
  front() {
    return this.element[0] || null;
  }

  // size
  size() {
    return this.element.length;
  }

  isEmpty() {
    return this.element.length === 0;
  }
}

/*

Given an input stream s consisting only of lowercase alphabets. While reading characters from the stream, 
you have to tell which character has appeared only once in the stream upto that point. 
If there are many characters that have appeared only once, you have to tell which one of them was the first one to appear. 
If there is no such character then append '#' to the answer.

Input: s = "aabc"
Output: "a#bb"
Explanation: For every ith character we will consider the string from index 0 till index i first non repeating character is as 
follow- "a" - first non-repeating character is 'a' "aa" - no non-repeating character so '#' "aab" - first non-repeating character is 'b' "aabc" 
- there are two non repeating characters 'b' and 'c',  first non-repeating character is 'b' because 'b' comes before 'c' in the stream.

*/

/*
Time complexity: O(N)
Space Complexity: O(k) 26 or char in string + O(N) for queue
*/
const firstNonRepeating = (str) => {
  let result = "";

  // Map to store frequency of each character
  let map = new Map();

  // Queue to maintain the order of characters as they appear
  let queue = new Queue();

  // Loop through each character in the string
  for (let char of str) {
    // Increment the character count in the map
    map.set(char, (map.get(char) || 0) + 1);

    // Add the character to the queue
    queue.enqueue(char);

    // Check the front of the queue for the first non-repeating character
    while (!queue.isEmpty()) {
      // If the front character has frequency more than 1, it's repeating — remove it
      if (map.get(queue.front()) > 1) {
        queue.dequeue();
      } else {
        // If the front character is non-repeating, add it to the result
        result += queue.front();
        break;
      }
    }

    // If queue is empty, no non-repeating character exists at this point — add '#'
    if (queue.isEmpty()) result += "#";
  }

  return result;
};

/**
 *
 * Version 2 of this question
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 * Input: s = "leetcode"
 * Output: 0
 * Explanation: The character 'l' at index 0 is the first character that does not occur at any other index.
 *
 */
const firstUniqChar = (str) => {
  let map = new Map(); // To store frequency of each character
  let queue = new Queue(); // To store [char, index] maintaining order

  // First pass: populate frequency map and queue
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    map.set(char, (map.get(char) || 0) + 1);
    queue.enqueue([char, i]); // Store both character and its index
  }

  // Process queue to find first non-repeating character
  while (!queue.isEmpty()) {
    const [char, idx] = queue.front();

    if (map.get(char) === 1) return idx; // Found first non-repeating

    queue.dequeue(); // Remove repeating character
  }

  return -1; // No non-repeating character found
};

const firstUniqChar_ = (str) => {
  let frequency = new Array(26).fill(0); // Only 26 lowercase English letters
  let base = "a".charCodeAt(0); // ASCII value of 'a'

  // First pass: Count frequency of each character
  for (let char of str) {
    frequency[char.charCodeAt(0) - base]++;
  }

  // Second pass: Find first character with frequency 1
  for (let i = 0; i < str.length; i++) {
    if (frequency[str.charCodeAt(i) - base] === 1) return i;
  }

  return -1; // No unique character
};

const str = "leetcode";
const check = firstNonRepeating(str);
const check2 = firstUniqChar_(str);
console.log(check2);
