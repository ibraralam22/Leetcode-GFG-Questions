/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     const INT_MAX = 2147483647; // 2^31 - 1
    const INT_MIN = -2147483648;
    let n=x;
    let ans=parseInt(x.toString().split("").reverse().join(""));
    if(n<0) ans=-ans;
    if(ans>INT_MAX || ans<INT_MIN) return 0;
    return ans;
};