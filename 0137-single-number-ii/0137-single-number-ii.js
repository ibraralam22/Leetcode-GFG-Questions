/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const obj = {};
    for(let i = 0; i < nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]] += 1;
        }
    }
    for( j in obj){
        if(obj[j] == 1){
            return j
        }
    }
};