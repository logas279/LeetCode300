/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let first_array = nums.slice(0, nums.length/2 );
    let last_array = nums.slice(nums.length/2);
    let result_array = [];

    for (let i = 0; i < first_array.length; i++){
        result_array.push(first_array[i]);
        result_array.push(last_array[i]);
    }

    return result_array;
};