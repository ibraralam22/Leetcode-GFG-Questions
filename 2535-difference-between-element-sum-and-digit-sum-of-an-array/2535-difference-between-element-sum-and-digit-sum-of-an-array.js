/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum = 0;
    let digitSum = 0;
    let x;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        x = (nums[i] + "").split("");
        for(let j = 0; j < x.length; j++){
            digitSum += (+x[j])
        }
    }
    return sum - digitSum;
};