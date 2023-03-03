/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let unique = {};
    let sum = 0;
    for(let i=0; i<nums.length; i++) {
        if(!unique[nums[i]]) {
            unique[nums[i]] = 1;
        } else {
            unique[nums[i]] += 1
        }
    }
    
    for(key in unique) {
        if(unique[key] == 1) {
            sum += Number(key)
        }
    }
    return sum;
};