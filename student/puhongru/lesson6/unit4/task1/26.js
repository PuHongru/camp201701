/**
 * leetcode 26. Remove Duplicates from Sorted Array
 * */


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 2){
        return nums.length;
    }
    let len = 1;

    for (var i = 1; i < nums.length; i++){
        if (nums[i] != nums[i - 1]){
            nums[len] = nums[i];
            len++;
        }
    }
    return len;
};