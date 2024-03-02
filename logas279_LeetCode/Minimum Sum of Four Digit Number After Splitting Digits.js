/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let str_num = String(num).split('').sort();
    return (Number(str_num[0]+str_num[2]) + Number(str_num[1]+str_num[3]));
};