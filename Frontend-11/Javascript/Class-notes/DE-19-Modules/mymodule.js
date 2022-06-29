function add(n1, n2) {
  return n1 + n2;
}

const WORKING_HOURS_WEEK = 40; // 45

let counter = 0;

function inc(amount = 1) {
  counter += amount;
  return counter;
}

function dec(amount = 1) {
  counter -= amount;
  return counter;
}

let localCounter = 0;

const moduleName = 'My module #1';
// export default moduleName;
// export default 'My module #1';

export default (num) => num * num;

export { WORKING_HOURS_WEEK, WORKING_HOURS_WEEK as WHW, add as sum, dec, inc, counter };

console.log('mymodule loaded');
