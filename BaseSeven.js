// trivial solution
const convertToBase7 = (num) => num.toString(7);

// non-trivial solution
// implement the algorithm for converting to a new base
// call it with a base of seven
const myConvertToBase7 = (num) => convertToBase(num, 7);

const convertToBase = (num, base) => {
  // we will store our digits in an array from most significant to least
  const digits = [];
  // the magnitude will decrease as we convert to the new base
  let magnitude = Math.abs(num);
  // if the magnitude exceeds the current base, we need to keep converting
  while (magnitude >= base) {
    // we generate our converted digits from least significant to most
    // this means we need to add them to the front of our array so that the least significant digit is at the end
    digits.unshift(magnitude % base);
    // remove the value of the digit we just found
    magnitude = Math.floor(magnitude / base);
  }
  // the remaining magnitude is our most significant digit
  digits.unshift(magnitude);
  // join the digits to form our converted number
  // add a negative sign on the front if we need to
  return (num < 0 ? "-" : "") + digits.join("");
};
