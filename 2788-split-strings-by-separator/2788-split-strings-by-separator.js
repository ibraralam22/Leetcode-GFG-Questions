/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    const result = [];

  for (let i = 0; i < words.length; i++) {
    let start = 0;
    let end = 0;

    while (end < words[i].length) {
      if (words[i].charAt(end) === separator) {
        if (start !== end) {
          result.push(words[i].substring(start, end));
        }
        start = end + 1;
      }
      end++;
    }

    if (start !== end) {
      result.push(words[i].substring(start, end));
    }
  }

  return result;
};