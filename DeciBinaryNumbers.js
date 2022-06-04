/**
 * split the string into indiviudal digits, parse each character to an integer, then return the maximum integer
 * @param {string} n
 * @return {number}
 */
const minPartitions = (n) => Math.max(...n.split("").map((x) => parseInt(x)));
