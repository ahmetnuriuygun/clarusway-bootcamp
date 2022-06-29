console.log('app.js loaded');

import square, { WHW, WORKING_HOURS_WEEK as hrs, dec, inc, sum, counter } from './mymodule.js';

console.log('WHW :>> ', WHW);
console.log('hrs :>> ', hrs);
console.log('sum(4,7) :>> ', sum(4, 7));
console.log('square(5) :>> ', square(5));

inc(6);
inc(4);
dec();

console.log('dec() :>> ', dec());
console.log('counter :>> ', counter);
// counter = 22;
console.log('inc(5) :>> ', inc(5));

let num1 = 55;

console.log('num1 :>> ', num1);
num2 = 77;
console.log('num2 :>> ', num2);
