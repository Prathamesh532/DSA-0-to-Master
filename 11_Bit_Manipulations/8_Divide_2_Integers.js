const divide = (dividend, divisor) => {
  if (dividend === divisor) return 1;

  let INT_MAX = 2 ** 31 - 1;
  let INT_MIN = -(2 ** 31);

  if (dividend == INT_MIN && divisor == -1) return INT_MAX;

  let sign = (dividend < 0) ^ (divisor < 0);

  let ans = 0;

  let n = Math.abs(dividend);
  let d = Math.abs(divisor);

  while (n >= d) {
    let cnt = 0;

    while (n >= d * Math.pow(2, cnt + 1) && d * Math.pow(2, cnt + 1) > 0) cnt++;

    ans = ans + Math.pow(2, cnt); // 1 << cnt
    n = n - d * Math.pow(2, cnt); // d << cnt
  }

  return sign ? -ans : ans;
};

const check = divide(10, 3);
console.log(check);
