/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var hasDuplicates = [];
    for (var i = 0; i < nums.length; ++i) {
        var value = nums[i];
        if (hasDuplicates.indexOf(value) !== -1) {
            return true;
        }
        hasDuplicates.push(value);
    }
    return false;
};