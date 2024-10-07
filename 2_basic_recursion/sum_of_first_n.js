// parametrized method
const sumofN = (i, n) => {
  if (i < 1) {
    console.log(n);
    return;
  }
  sumofN(i - 1, n + i);
};

sumofN(3, 0);

// functional way
function sumofN_functional(n) {
  if (n == 0) return 0;
  return n + sumofN_functional(n - 1);
}

let s = sumofN_functional(3);
console.log("sum:", s);
