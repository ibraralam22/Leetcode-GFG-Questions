/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let newSum = [];

    for (let i = 0; i < nums.length; i++) {
      let small = 0;
      for (let j = 0; j <= nums.length; j++) {
        if (nums[j] < nums[i]) {
          small = small + 1;
        }
      }
      newSum.push(small);
    }
    return newSum
};