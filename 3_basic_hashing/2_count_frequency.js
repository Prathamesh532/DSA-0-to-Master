// creating the map
let hashmap = new Map();

// array
let arr = [112, 21, 1, 21, 3, 3, 4, 5, 6];

// pre-computing / storing
arr.forEach((key) => {
  if (hashmap.has(key)) {
    hashmap.set(key, hashmap.get(key) + 1);
  } else {
    hashmap.set(key, 1);
  }
});

// fetching
// console.log(hashmap.get(3));

// finding highest and lowest frequency
let max = -Infinity;
let min = Infinity;
let highest = [];
let lowest = [];

for (let [key, value] of hashmap) console.log(key, value);

for (let [key, value] of hashmap) {
  let count = value;
  let element = key;
  if (count > max) {
    highest = [element];
    max = count;
  } else if (count == max) highest.push(element);

  if (count < min) {
    lowest = [element];
    min = count;
  } else if (count == min) lowest.push(element);
}
console.log("max", max);
console.log("min", min);
console.log("highest", highest);
console.log("lowest", lowest);
