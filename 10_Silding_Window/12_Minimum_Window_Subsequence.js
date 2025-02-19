const minWindowSubsequence = (s, t) => {
  // s - string
  let left = 0;
  let right = 0;

  let tPointer = 0; // t - string
  let minLen = Infinity;
  let start = -1;

  while (right < s.length) {
    while (right < s.length && tPointer < t.length) {
      if (s[right] === t[tPointer]) tPointer++;
      right++;
    }

    if (tPointer < t.length) break;

    let endPointer = right;
    let shirkPointer = right - 1;

    while (tPointer > 0) {
      if (s[shirkPointer] === t[tPointer - 1]) tPointer--;
      shirkPointer--;
    }

    if (endPointer - (shirkPointer + 1) < minLen) {
      minLen = endPointer - (shirkPointer + 1);
      start = shirkPointer + 1 + 1;
    }

    left = shirkPointer + 2;
    right = left;
    tPointer = 0;
  }

  return start === -1 ? "" : s.substring(start, start + minLen);
};
