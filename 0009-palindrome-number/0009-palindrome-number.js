/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    let n=x;
    let ans = parseInt(x.toString().split("").reverse().join(""));
    if(ans != n) return false;
    return true;
};