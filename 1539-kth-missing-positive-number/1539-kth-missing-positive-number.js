/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let missingCount = 0;
    let current = 1;
    for(let i = 0; missingCount < k; current++){
        if(arr.length && arr[i] === current){
        i += 1
        } else {
            missingCount += 1
        }
        if(missingCount === k){
            return current;
        }
    }
    return -1
};