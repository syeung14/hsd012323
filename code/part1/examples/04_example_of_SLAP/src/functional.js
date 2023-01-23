const numbers = [1, 2, 3, 4, 5, 6];

const result = 
  numbers.filter(function(number) { return number % 2 === 0; })
    .map(function(number) { return number * 2; })
    .reduce(function(total, number) { return total + number; });

console.log(result);

/*
This is better from the SLAP point of view
Each line focuses on one level of detail

May be unfamilar to developers at large, but less complex than the
imperative style we saw in the verbose.js

familiar != simple
unfamiliar != complex

This is better but not great
It is still noisy and needs some effort to understand.
*/
