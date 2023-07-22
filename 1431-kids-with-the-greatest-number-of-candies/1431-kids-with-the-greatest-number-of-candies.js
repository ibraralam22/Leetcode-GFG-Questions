/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandiesKid = candies[0];
    let res = [];
    for(let i = 0; i < candies.length; i++){
        if(candies[i]>maxCandiesKid){
            maxCandiesKid  = candies[i];
        }
    }
    for(let j = 0; j < candies.length; j++){
        res.push(candies[j] + extraCandies >= maxCandiesKid);
    }
    return res;
};