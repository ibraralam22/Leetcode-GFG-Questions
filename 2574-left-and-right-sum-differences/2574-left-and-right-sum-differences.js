/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const n = nums.length;
    const leftSum = new Array(n).fill(0);
    const rightSum = new Array(n).fill(0);
    const answer = new Array(n).fill(0);

    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum += nums[i - 1];
        leftSum[i] = sum;
    }

    sum = 0;
    for (let i = n - 2; i >= 0; i--) {
        sum += nums[i + 1];
        rightSum[i] = sum;
    }

    for (let i = 0; i < n; i++) {
        answer[i] = Math.abs(leftSum[i] - rightSum[i]);
    }

    return answer;
};