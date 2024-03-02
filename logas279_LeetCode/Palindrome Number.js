/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reNum = ''; //number after read
  
    str = String(x);  //convert x into string
    strArr = str.split(''); //split into array
    strArr.reverse(); //reverse arr
  
    //make the reverse string
    for (let i = 0; i < strArr.length; i++) {
      reNum += strArr[i];
    }
  
    reNum = Number(reNum) //convert into reverse number
    return (reNum === x ? true : false)
  };