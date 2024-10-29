let s = "paper";
let t = "title";

const findIsomorphicString = (a, b) => {
  if (a.length !== b.length) return false;

  let mapA = {};
  let mapB = {};

  for (let i = 0; i < a.length; i++) {
    let charA = a[i];
    let charB = b[i];

    if (mapA[charA] && mapA[charA] !== charB) return false;
    if (mapB[charB] && mapB[charB] !== charA) return false;

    mapA[charA] = charB;
    mapB[charB] = charA;
  }
  return true;
};
console.log("is isomorphic", findIsomorphicString(s, t));
