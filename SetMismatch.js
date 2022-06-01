/**
 * @param {number[]} nums
 * @return {number[]} result
 */
const findErrorNums = (nums) => {
  // result will always have two values: duplicate and missing
  const result = Array(2);
  // iterate over every number to find our duplicate value and prepare to find our missing value
  nums.forEach((num) => {
    // find the index where this number would be in an array from one to n
    const properIndex = Math.abs(num) - 1;
    // if the value at this index has already been negated, we have seen the current number already
    // this is the duplicate!!
    if (nums[properIndex] < 0) result[0] = properIndex + 1;
    // if the value at this index has not been negated, we have not seen the current number
    // negate the value to remember that we've seen the current number
    else nums[properIndex] *= -1;
  });
  // we found the duplicate, now we need to find the missing number
  for (const [i, num] of nums.entries()) {
    // if the current number has not been negated, then we did not see the number that would be stored at this index in an array from one to n
    if (num > 0) {
      // this is our missing number!!
      result[1] = i + 1;
      // we can stop looping because we found the answer
      break;
    }
  }
  return result;
};
