/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = num => {
    const digits = []; // store our digits in an array from least significant to most
    let magnitude = Math.abs(num); // the magnitude will decrease as we build our base-seven number
    while (magnitude >= 7) { // digits in base seven are from zero to six, so if the magnitude is seven or higher, we need to keep going
        digits.unshift(magnitude % 7); // add the digit to the front of the array
        magnitude = Math.floor(magnitude / 7); // remove the value of the digit we just found
    }
    digits.unshift(magnitude); // add the most significant digit
    return (num < 0 ? "-" : "") + digits.join(""); // join the digits to make our base-seven number; add a negative sign on the front if we need to
}