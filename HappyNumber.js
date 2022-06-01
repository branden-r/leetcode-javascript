const isHappy = (n) => {
  // use the tortoise and hare algorithm to detect a cycle
  // the hare moves twice as fast as the tortoise
  let tortoise = n;
  let hare = n;
  do {
    // one call
    tortoise = mathySquareSumDigits(tortoise);
    // two calls
    hare = mathySquareSumDigits(mathySquareSumDigits(hare));
    // loop until the hare finds a one or the tortoise
    // if we found a one, there's no cycle
    // if we found the tortoise, there's a cycle
  } while (hare !== 1 && hare !== tortoise);
  // return true if we found a one, false if we found the tortoise
  return hare === 1;
};

const mathySquareSumDigits = (n) => {
  // this is the value we will return later
  let r = 0;
  // loop until we've gone through every digit
  while (n > 0) {
    // find the least significant digit, square it, and add it to the return value
    r += (n % 10) ** 2;
    // remove the least significant digit
    n = Math.floor(n / 10);
  }
  return r;
};

// sums the squares of each digit of the given number
const functionalSquareSumDigits = (n) =>
  n
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit) ** 2, 0);
