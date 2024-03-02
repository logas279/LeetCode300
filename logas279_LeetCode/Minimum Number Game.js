/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let result = [];
    while (nums.length !== 0){
        let alice_num = Math.min(...nums);
        nums.splice(nums.indexOf(alice_num), 1);
        let bob_num = Math.min(...nums);
        nums.splice(nums.indexOf(bob_num), 1);

        result.push(bob_num);
        result.push(alice_num);               
    }
    return result;
};