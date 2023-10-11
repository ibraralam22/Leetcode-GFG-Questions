/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    function bubbleSort(heights) {
    for (let i = 0; i < heights.length - 1; i++) {
      for (let j = 0; j < heights.length - 1 - i; j++) {
        if (heights[j] > heights[j + 1]) {
          let temp = heights[j];
          heights[j] = heights[j + 1];
          heights[j + 1] = temp;
        }
      }
    }
    return heights;
  }

  const expected = bubbleSort([...heights]);
  let count = 0;
  
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      count++;
    }
  }

  return count;
};