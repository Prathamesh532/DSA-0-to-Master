// Input: N1 = 9, N2 = 12

// Output: 3
// Explanation:Factors of 9: 1, 3 and 9
// Factors of 12: 1, 2, 3, 4, 6, 12
// Common Factors: 1, 3 out of which 3 is the greatest hence it is the GCD.

const isGCD = (n1, n2) => {
  let temp = [];
  let temp2 = [];
  for (let i = 1; i <= n1; i++) {
    if (n1 % i == 0) {
      temp.push(i);
    }
  }
  for (let i = 1; i <= n2; i++) {
    if (n2 % i == 0) {
      temp2.push(i);
    }
  }
  // find the common highest divisior bewteen temp and temp2
  console.log("temp", temp);
  console.log("temp2", temp2);
};

const isGCD_b = (n1, n2) => {
  let gcd = 1;
  for (let i = 0; i < Math.min(n1, n2); i++) {
    if (n1 % i == 0 && n2 % i == 0) {
      gcd = i;
    }
  }
  return gcd;
};

const isGCD_better = (n1, n2) => {
  let gcd = 1;
  for (let i = Math.min(n1, n2); i > 1; i--) {
    if (n1 % i == 0 && n2 % i == 0) [(gcd = i)];
  }
  return gcd;
};

// Euclidean Algorithm
const isGCD_Opt = (n1, n2) => {
  while (n1 > 0 && n2 > 0) {
    if (n1 > n2) n1 = n1 % n2;
    else n2 = n2 % n1;
  }
  if (n1 == 0) return n2;
  return n1;
};

let a = isGCD_Opt(11, 13);
console.log("a", a);
