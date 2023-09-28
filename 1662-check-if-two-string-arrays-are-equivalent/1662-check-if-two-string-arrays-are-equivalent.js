/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let newWord1 = '';
    let newWord2 = '';
    for(let i = 0; i < word1.length; i++){
        newWord1 += word1[i];
    }
    for(let j = 0; j < word2.length; j++){
        newWord2 += word2[j];
    }
    if(newWord1 == newWord2){
        return true
    } else {
        return false
    }
};