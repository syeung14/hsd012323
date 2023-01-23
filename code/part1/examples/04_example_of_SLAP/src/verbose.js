const numbers = [1, 2, 3, 4, 5, 6];

let result = 0;

for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] % 2 === 0) {
    result += numbers[i] * 2;
  }
}

console.log(result);

/*
It works, it is familiar, but quite complex
Violates SLAP

Takes more effort to understand and to change

This is of poor quality even though a lot of us have witten code
like this a lot.
*/
