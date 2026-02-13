const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	const initialValue = 0;
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  )
};

const multiply = function(arr) {
	if (arr.length > 0) {
    return arr.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    )
  }
  else return 0;
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(num) {
	if (num >= 0){
    let result = 1;
    while (num > 1) {
      result *= num;
      num--;
    }
    return result;
  } else {
    return undefined;
  }
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
