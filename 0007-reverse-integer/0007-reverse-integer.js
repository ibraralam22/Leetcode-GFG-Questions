/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     const INT_MAX = 2147483647; // 2^31 - 1
    const INT_MIN = -2147483648;
    let ans = 0;
    let isNegative = x < 0;
    
     if (isNegative) {
        x = -x;
    }
    
    while(x!=0){
        let digit = x % 10;
        ans = ans * 10 + digit;
        x = Math.floor(x/10);
    }
     if (isNegative) {
        ans = -ans;
    }

    if(ans>INT_MAX || ans<INT_MIN) return 0;
    return ans;
};