const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let total = 0
  for (let i = 0; i < (arr.length > 0? arr.length: 0); i++) {
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let total = arr[0]
  for (let i = 1; i < (arr.length > 0? arr.length: 0); i++) {
    total *= arr[i];
  }
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let total = 1
  for (i = 1; i < a + 1; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
