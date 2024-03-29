/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let amount = 0;
    for (let i = 0; i < accounts.length; i++){
        let count = 0;
        for (let j =0; j < accounts[i].length; j++){
            count += accounts[i][j];
        }
        if(count>amount){
            amount = count;
        } 
    }
    return amount;
};