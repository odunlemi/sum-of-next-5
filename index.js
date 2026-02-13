/* Sums the next 5 consecutive numbers after n */
function sumOfNext5(n) {
  if (typeof n === "number") {
    return sum(n);
  } else {
    throw new Error("Not a number");
  }
}

const sum = (n) => {
  const result = (n + 3) * 5;
  return result;
};

module.exports = sumOfNext5;
