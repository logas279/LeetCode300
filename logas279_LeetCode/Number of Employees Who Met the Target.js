/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0;
    for (employ of hours){
        if (employ >= target){
            count++;
        }
    }
    return count;
};