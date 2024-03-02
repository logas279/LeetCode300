/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max_candies = Math.max(...candies);
    let boolean_candies = [];
    for(let i = 0; i < candies.length; i++){
        if(candies[i] + extraCandies >= max_candies){
            boolean_candies.push(true);
        } else {
            boolean_candies.push(false);
        }
    }
    return boolean_candies;
};