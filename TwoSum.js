/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  // we will map every number to its index
  const numToI = new Map();
  for (const [i, num] of nums.entries()) {
    // partner is the number we need to find for the solution
    let partner = target - num;
    // if we have seen partner before, we have found a solution
    if (numToI.has(partner)) return [numToI.get(partner), i];
    // if we have not seen partner before, we need to keep looking
    // remember the index of the current number in case it occurs as a partner later
    numToI.set(num, i);
  }
};
