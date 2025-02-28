const xorFromRange = (start, end) => {
  let xor1 = 0;

  for (let i = 0; i < start; i++) {
    xor1 ^= i;
  }

  let xor2 = 0;

  for (let i = 0; i <= end; i++) {
    xor2 ^= i;
  }

  return xor1 ^ xor2;
};

const xorFromRange_better = (start, end) => {
  let xor = 0;

  for (let i = start; i <= end; i++) {
    xor ^= i;
  }

  return xor;
};

const xorFromRange_ = (n) => {
  if (n % 4 == 1) return 1;
  if (n % 4 == 2) return n + 1;
  if (n % 4 == 3) return 0;
  if (n % 4 == 0) return n;
};

const check = xorFromRange_better(4, 9);
let start = 4;
let end = 9;
const optimal = xorFromRange_(start - 1) ^ xorFromRange_(end);
console.log(check);
console.log(optimal);
