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

const power = function() {
	
};

const factorial = function() {
	
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
