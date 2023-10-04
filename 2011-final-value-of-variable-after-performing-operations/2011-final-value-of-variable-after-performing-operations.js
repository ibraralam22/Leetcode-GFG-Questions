/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let result=0
    for(let i of operations){
        if(i=="--X" || i== "X--" ){
            result--
        }
        if (i=="X++" || i=="++X"){
            result++
        }
    }
    return result 
};