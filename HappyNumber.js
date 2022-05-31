/**
 * @param {number} n
 * @return {boolean} 
 */
const isHappy = n => {
    const history = new Set(); // remember each number that gets generated to check for a cycle
    while (n !== 1 && !history.has(n)) { // loop until we hit a one or we hit a duplicate
        history.add(n); // remember the current number for duplicate-checking
        n = nextNumber(n); // find the next number in the sequence
    }
    return n === 1; // true if we found a one, false if we didn't
}

const nextNumber = n => n.toString().split("").reduce((sum, digit) => sum + parseInt(digit) ** 2, 0);  // sums the squares of each digit of the given number