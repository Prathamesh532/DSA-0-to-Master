// function to convert decimal to binary
const convertDecimalToBinary = (n) => {
  let binary = "";

  while (n > 0) {
    binary += (n % 2).toString();
    n = Math.floor(n / 2);
  }

  binary.split("").reverse().join("");

  return binary;
};

// function to convert binary to decimal
const convertBinaryToDeciam = (bits) => {
  let decimal = 0;

  for (let i = bits.length - 1; i >= 0; i--) {
    decimal += bits[i] * Math.pow(2, bits.length - 1 - i);
  }
  return decimal;
};

const toBinary = convertDecimalToBinary(5);
console.log("To binary -->", toBinary);

const toDecimal = convertBinaryToDeciam("010");
console.log("To decimal -->", toDecimal);
