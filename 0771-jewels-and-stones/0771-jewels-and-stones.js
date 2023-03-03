/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let obj={};
    
    for( j of jewels) {
        obj[j] = 1;
    }
    
    let sum = 0;
    
    for(s of stones) {
        if(obj[s]) {
            sum ++;
        }
    }
    
    return sum
};