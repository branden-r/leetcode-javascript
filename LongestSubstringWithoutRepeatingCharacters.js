const lengthOfLongestSubstring = (s) => {
  // we're going to use this map to keep track of the last place we saw a character
  const charToIndex = new Map();
  // initialize the maximum substring length to zero and reassign it in the loop
  // this also covers the case of an empty string, where the loop will do nothing
  let maxLength = 0;
  // low index of the substring we're currently scanning
  let startIndex = 0;
  // iterate over the given string once and only once
  for (let i = 0; i < s.length; i++) {
    // if we found a repeating character...
    if (charToIndex.has(s[i])) {
      // update the maximum length if the length of the current substring is bigger
      maxLength = Math.max(maxLength, i - startIndex);
      // increase the starting index if the previous instance of this repeating character is inside the substring we're currently scanning
      // the plus one is there to move past the repeating character
      startIndex = Math.max(startIndex, charToIndex.get(s[i]) + 1);
    }
    // update the index of the character we just scanned so we remember the last place we saw it
    charToIndex.set(s[i], i);
  }
  // we're done scanning the string
  // update the length one more time in case we did not finish scanning the last substring
  maxLength = Math.max(maxLength, s.length - startIndex);
  return maxLength;
};
