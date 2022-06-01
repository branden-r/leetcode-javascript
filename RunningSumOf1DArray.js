/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = nums => {
    // to create a running sum of the given array, add the previous number to every number
    for (let i = 1; i < nums.length; i++) nums[i] += nums[i - 1];
    return nums;
}

// one liner using a functional style
// pretty neat, but it creates a new array when:
//  (1) we slice
//  (2) when we start looping
//  (3) every iteration of the loop
// it's also harder to understand
const oneLineRunningSum = nums => nums.slice(1).reduce( (runningSumArray, num, i) => [...runningSumArray, runningSumArray[i] + num], [nums[0]]);