/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    for(let i = 0; i < nums.length - 1; i++){
        const sum = nums[i] + nums[i + 1];
        for(let j = i + 1; j < nums.length - 1; j++){
            const sum1 = nums[j] + nums[j + 1]
            if(sum === sum1){
                return true;
            }
        }
    }
    return false;
};