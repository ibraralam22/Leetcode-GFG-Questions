/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let newNames = [];

    for(let i = 0; i<names.length; i++) {
      newNames.push([names[i], heights[i]]);
    }

    let a = newNames.sort((a,b)=> b[1] - a[1]);
    let b = a.map((el=>{
      return el[0]
    })) 
    
    return b
};