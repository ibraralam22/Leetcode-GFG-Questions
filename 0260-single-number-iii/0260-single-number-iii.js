/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const obj = {};
    let singleNums = [];
    for(let i = 0; i < nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]] += 1;
        }
    }
    for(e in obj){
        if(obj[e] == 1){
            singleNums.push(+e)
        }
    }
    return singleNums;
};