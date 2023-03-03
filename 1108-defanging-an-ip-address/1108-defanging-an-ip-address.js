/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let newArr = [];
    for(let i = 0; i < address.length; i++) {
        if(address[i] !== "."){
            newArr.push(address[i])
        } else {
            newArr.push("[.]");
        }
    }
    return newArr.join("");
};