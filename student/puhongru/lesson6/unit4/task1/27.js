/**
 * leetcode 27. Remove Element
 * */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = 0;

    for (var i = 0; i < nums.length; i++){
        if (nums[i] !== val){
            nums[len] = nums[i];
            len++;
        }
    }
    return len;
};