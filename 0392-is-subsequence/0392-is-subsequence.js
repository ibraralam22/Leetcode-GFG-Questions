/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length > t.length) return false;
  
  const t_length = t.length;
  let subseq = 0;
  for (let i = 0; i < t_length; i++) {
    if (s[subseq] === t[i]) {
      subseq++;
    }
  }
  return subseq === s.length
};