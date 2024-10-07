// functional way
const factorial = (n) => {
  if (n == 1) return 1;
  return n * factorial(n - 1);
};

let a = factorial(5);
console.log("A", a);

//parameterized way
const factorial_params = (i, n) => {
  if (i == 0) {
    console.log(n);
    return;
  }
  factorial_params(i - 1, n * i);
};

factorial_params(5, 1);
