const factorial = (n) => {
  // base case
  if (n == 0) return 1;

  return n * factorial(n - 1);
};

let factorialOf = factorial(5);
console.log(factorialOf);
