// function to swap number
const swap = (a, b) => {
  a = a ^ b;
  b = a ^ b; // (a ^ b) ^ b ---> b gets cancel and we "a"
  a = a ^ b; // (a ^ b) ^ a ---> b gets cancel and we "a"
  console.log("a", a);
  console.log("b", b);
};

const swapNum = swap(5, 1);
// console.log(swapNum);

// check if ith bit is set or not
const checkIsBitSet = (n, i) => {
  return n & ((1 << i !== 0) == 1) ? true : false;
};

const isBitSet = checkIsBitSet(3, 1);
console.log("isBitSet", isBitSet);

// set the ith bit to 1
const setIthBit = (n, i) => {
  return n | (1 << i);
};

const setBit = setIthBit(5, 1);
console.log("setBit", setBit);

// clear the ith bit
const cleatIthBit = (n, i) => {
  return n & ~(1 << i);
};

const cleatBit = cleatIthBit(5, 0);
console.log("cleatBit", cleatBit);

// toggle the ith bit
const toggleIthBit = (n, i) => {
  return n ^ (1 << i);
};

const toggleBit = toggleIthBit(5, 2);
console.log("toggleBit", toggleBit);
