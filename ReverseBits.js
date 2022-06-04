/**
 * all numbers in javascript are stored as doubles
 * bitwise operations convert these doubles to thirty-two bit signed integers, but we want unsigned...
 * let's just perform bitwise operations using math instead!!
 *
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = (n) => {
  // result starts at zero
  let r = 0;
  // loop once per bit
  for (let i = 0; i < 32; i++) {
    // left-shift the result by one place so we don't overwrite the last digit we wrote
    // this does nothing in our first iteration
    r *= 2;
    // if the least significant bit of the given number is a one, write a one in our result
    if (n % 2 == 1) r++;
    // right-shift the given number to look at the next significant bit in the next iteration
    n = Math.floor(n / 2);
  }
  return r;
};

/**
 * convert the given number to a bit string, reverse it, then convert it back into a number
 * for reversal, convert the string into an array of characters, reverse the array, then convert it back into a string
 * the bit string will need to be zero-padded to match a width of thirty-two
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const stringyReverseBits = (n) =>
  parseInt(
    appendZeroPadding(n.toString(2).split("").reverse().join(""), 32),
    2
  );

const appendZeroPadding = (bitString, bitWidth) =>
  bitString + "0".repeat(bitWidth - bitString.length);
