/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++){
        let left_sum = 0;
        let right_sum = 0;
        for (let j = 0; j < nums.length; j ++){
            if(j < i){
                left_sum += nums[j];
            }
            if ( j > i){
                right_sum += nums[j];
            }
        }
        result.push(Math.abs(left_sum - right_sum));
    }
    return result;
};