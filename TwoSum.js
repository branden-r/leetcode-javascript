/**
* @param {number[]} numbers
* @param {number} target
* @return {number[]}
*/
const twoSum = function(numbers, target) {
   let result;
   let indexMap = new Map();  // use a map to store the index of every number we see
   for (let index = 0; index < numbers.length; index++) {
       partner = target - numbers[index]; // partner is the number we need to find for a solution
       if (indexMap.has(partner)) { // if we've seen partner already, we're done
           result = [indexMap.get(partner), index];
           break;
       }
       indexMap.set(numbers[index], index); // we did not find a solution; remember the index of the number we looked at
   }
   return result;
};