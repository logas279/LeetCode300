/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let k = 0;
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++){
            if(i != j && i < j && nums[i] + nums[j] < target){
                k++
            }
        }
    }
    return k;
};