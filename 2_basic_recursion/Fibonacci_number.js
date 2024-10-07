let fibonacci = [0, 1];

let n = 5;
for (let i = 2; i < n; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

const fibonacci_Number = (n) => {
  if (n <= 1) return n;
  let last = fibonacci_Number(n - 1);
  let last_second = fibonacci_Number(n - 2);
  return last + last_second;
};

let a = fibonacci_Number(3);
console.log("a", a);
