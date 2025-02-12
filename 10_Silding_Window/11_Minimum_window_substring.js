const minWindow = (s, t) => {
  let minLength = Infinity;
  let starIndex = -1;

  for (let i = 0; i < s.length; i++) {
    let hashMap = new Map();
    let cnt = 0;
    for (let j = 0; j < t.length; j++)
      hashMap.set(t[j], (hashMap.get(t[j]) || 0) + 1);

    for (let k = i; k < s.length; k++) {
      if (hashMap.get(s[k]) > 0) cnt++;
      hashMap.set(s[k], (hashMap.get(s[k]) || 0) - 1);

      if (cnt == t.length) {
        if (k - i + 1 < minLength) {
          minLength = k - i + 1;
          starIndex = i;
          break;
        }
      }
    }
  }

  return s.substring(starIndex, starIndex + minLength);
};

// using sliding window / 2 pointer
const minWindow_ = (s, t) => {
  let left = 0;
  let right = 0;
  let minLen = Infinity;
  let cnt = 0;
  let startIndex = 0;

  let hashMap = new Map();

  for (let char of t) {
    hashMap.set(char, (hashMap.get(char) || 0) + 1);
  }

  while (right < s.length) {
    if (hashMap.get(s[right]) > 0) cnt++;

    hashMap.set(s[right], (hashMap.get(s[right]) || 0) - 1);

    while (cnt === t.length) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        startIndex = left;
      }

      hashMap.set(s[left], (hashMap.get(s[left]) || 0) + 1);
      if (hashMap.has(s[left]) && hashMap.get(s[left]) > 0) cnt--;
      left++;
    }
    right++;
  }

  return minLen === Infinity
    ? ""
    : s.substring(startIndex, startIndex + minLen);
};

const check = minWindow_("ADOBECODEBANC", "ABC");
console.log(check);
