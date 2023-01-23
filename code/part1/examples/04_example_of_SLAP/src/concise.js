const numbers = [1, 2, 3, 4, 5, 6];

const isEven = number => number % 2 === 0;
const double = number => number * 2;
const add = (operand1, operand2) => operand1 + operand2;

const result = 
  numbers.filter(isEven)
    .map(double)
    .reduce(add);

console.log(result);

/*
Least noisy
Less code for the eyes to parse in the functional pipeline
Follows SLAP
Easier to unit test the different functions where necessary
Has the least amount of cogitive load
*/
