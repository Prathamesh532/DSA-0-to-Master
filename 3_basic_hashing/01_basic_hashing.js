// This is Number hashing code logic
{
  // declared the fixed size array
  let hashArr = new Int32Array(24).fill(0);

  let arr = [1, 23, 23, 5, 6, 7, 4, 5];

  // pre compute
  for (let i = 0; i < arr?.length; i++) {
    hashArr[arr[i]] += 1;
  }

  console.log("Number Hashing", hashArr[23]);
}

// this is character hashing code logic
{
  // let charHashArr = new Int32Array(26).fill(0); // when we need to hash only small case OR large Case
  let charHashArr = new Int32Array(256).fill(0); // when there can be any character

  let str = "abasdhasd";

  // pre computing
  for (let i = 0; i < str.length; i++) {
    //   charHashArr[str[i].charCodeAt() - 'a'.charCodeAt()] += 1; // when we need to hash code of small / large case character
    charHashArr[str[i].charCodeAt()] += 1; // this for any character
  }

  // fetching
  // console.log(charHashArr["A".charCodeAt() - 'a'.charCodeAt()]); // this is for small / large case
  console.log("Character Hashing:", charHashArr["A".charCodeAt()]); // any character
}

let hashMap = new Map([[12, 2, 3]]);
console.log("hashMap", hashMap[2]);
