const add = function(num1, num2) {
	const result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
	const result = num1 -num2;
  return result;
};

const sum = function(nums) {
	let result = 0;
  for (num of nums) {
    result += num;
  }
  return result;
};

const multiply = function(nums) {
  let result = 1;
  for (num of nums) {
    result *= num;
  }
  return result;
};

const power = function(base, expo) {
	let result = 1;
  for (let i = 0; i < expo; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(num) {
	if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
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
