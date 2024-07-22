/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let ans = 0;
    if(x<0) return false;
    let n = x;
    while(x!=0){
        let digit = x % 10;
        ans = ans * 10 + digit;
        x = Math.floor(x / 10)
    }
    if(ans != n) return false;
    return true;
    
};