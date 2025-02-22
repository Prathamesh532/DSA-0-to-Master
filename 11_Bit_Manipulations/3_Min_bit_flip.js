const minBitFlip = (a, b) => {
  let ans = a ^ b;
  let count = 0;
  while (ans !== 0) {
    ans = ans & (ans - 1);
    count++;
  }
  return count;
};

const check = minBitFlip(10, 7);
console.log(check);
