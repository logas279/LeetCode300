/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;
    let str_number = String(n);
    for (num of str_number){
        product *= Number(num);
        sum += Number(num);
    }
    return product - sum;
};