let str = "abcde";
let goal = "abced";

const rotateString = (str, goal) => {
  if (str.length !== goal.length) return false;

  return (str + str).includes(goal);
};
console.log("rotateString", rotateString(str, goal));
