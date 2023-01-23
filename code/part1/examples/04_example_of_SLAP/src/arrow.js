const numbers = [1, 2, 3, 4, 5, 6];

const result = 
  numbers.filter(number => number % 2 === 0)
    .map(number => number * 2)
    .reduce((total, number) => total + number);

console.log(result);

/*
Less noisy, so better than the functional.js
Quick to read and understand than the previous version
Follow SLAP much like the functional.js

But, still have some cogitive load
*/
