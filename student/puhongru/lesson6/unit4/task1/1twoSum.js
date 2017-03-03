/**
 * Created by puhongru on 2017/3/3.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let nums1 = nums.concat();
    nums1 = nums1.sort(function (a, b){
        return a - b;
    });
    let i = 0;
    let j = nums1.length - 1;
    var ret = [];

    while (nums1[i] + nums1[j] != target){
        if (nums1[i] + nums1[j] > target){
            j--;
        } else if (nums1[i] + nums1[j] < target){
            i++;
        }
    }

    console.log(nums1[i]);
    console.log(nums1[j]);
    console.log(nums);
    ret.push(nums.indexOf(nums1[i]));
    ret.push(nums.lastIndexOf(nums1[j]));
    return ret;
};

console.log(twoSum([3,3], 6));