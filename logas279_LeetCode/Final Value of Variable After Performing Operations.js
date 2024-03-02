/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    var obj = {
      'X++': 1,
      '++X': 1,
      'X--':-1,
      '--X': -1
    }
    let result = 0;

    for (let i = 0; i < operations.length; i++){
        result += obj[operations[i]];
    }
    return result;
};