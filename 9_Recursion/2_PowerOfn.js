const power = (base, expo) => {
  // base case
  if (expo == 0) return 1;

  return base * power(base, expo - 1);
};

const powerOf = power(3, 5);
console.log(powerOf);
