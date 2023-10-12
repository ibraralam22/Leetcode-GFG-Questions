/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const obj = {};
    let res = '';
    for(let i = 0; i < s.length; i++){
        if(!obj[s[i]]){
            obj[s[i]] = 1;
        } else {
            obj[s[i]] += 1;
        }
    }
    for(let j = 0; j < t.length; j++){
        if(!obj[t[j]]){
            res += t[j]
        }  else {
            obj[t[j]] -= 1;
        }
    }
    return res;
};