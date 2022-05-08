/**
* @param {number[]} numbers
* @param {number} target
* @return {number[]}
*/
const twoSum = function(numbers, target) {
   let result;
   let indexMap = new Map();
   for (let index = 0; index < numbers.length; index++) {
       partner = target - numbers[index];
       if (indexMap.has(partner)) {
           result = [indexMap.get(partner), index];
           break;
       }
       indexMap.set(numbers[index], index);
   }
   return result;
};