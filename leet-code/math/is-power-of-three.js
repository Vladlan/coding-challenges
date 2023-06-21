/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
    const power = Math.log(n)/Math.log(3);
    return Math.abs(Math.round(power) - power) < 1e-10  
};