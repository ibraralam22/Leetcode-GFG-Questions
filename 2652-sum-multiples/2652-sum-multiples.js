/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let count = 0
    let sumNum = [];
    for (let i = 1; i < n + 1; i++) {
      if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
        sumNum.push(i);
      }
    }
    for( let i = 0; i < sumNum.length; i++){
      count = count + sumNum[i]
    }
    return count;
};  