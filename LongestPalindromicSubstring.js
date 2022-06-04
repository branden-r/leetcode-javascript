/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  // use this to store the longest palindromic substring
  let longest = "";
  // use this to store the starting and ending indices of the middle of the palindromic substring
  const middle = Array(2).fill(0);

  // loop until we've gone over the entire string
  while (middle[1] !== s.length) {
    // create a copy of the indices of the middle of the palindromic substring
    // we will expand these bounds as long as our substring remains palindromic
    const bounds = middle.slice();
    // stop if the start and end of the palindromic substring are not equal
    // stop if we go out of bounds of the original string
    while (s[bounds[0]] === s[bounds[1]] && s[bounds[0]] !== undefined) {
      // check the next character on the left
      bounds[0]--;
      // check the next character on the right
      bounds[1]++;
    }
    // the above loop ended because including the left and right bounds ruin the palindromic substring
    // our current palindromic substring must exclude these indices
    const current = s.slice(bounds[0] + 1, bounds[1]);
    // if the palindromic substring is longer than the longest one we've seen so far, remember it!!
    if (current.length > longest.length) longest = current;
    // shift the middle of the next palindrome to check to the right by one index
    // the middle can be of length one or two
    if (middle[0] === middle[1]) middle[1]++;
    else middle[0]++;
  }
  return longest;
};
