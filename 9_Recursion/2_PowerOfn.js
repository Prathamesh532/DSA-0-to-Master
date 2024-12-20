const power = (base, expo) => {
  // base case
  if (expo == 0) return 1;

  return base * power(base, expo - 1);
};

const power_v2 = (base, expo) => {
  // base case
  if (expo == 0) return 1;
  if (expo == 1) return base;

  let ans = power_v2(base, expo / 2);

  if (expo % 2 == 0) return ans * ans;
  else return base * (ans * ans);
};

const powerOf = power_v2(3, 5);
console.log(powerOf);
