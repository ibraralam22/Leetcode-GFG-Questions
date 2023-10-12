/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    for(let i = 0; i <= n + 1; i++){
        if (nums.indexOf(i) === -1) {
          return i;
        }
    }
};