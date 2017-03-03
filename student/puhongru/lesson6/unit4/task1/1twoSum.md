**问题描述：**

1.Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,

return [0, 1].

**解题思路：**

1. 首先对数组进行拷贝;
2. 再对拷贝的数组进行排序;
3. 再使用指针i和指针j，i从第一个数开始，j从最后一个数开始，若nums1[i] + nums1[j]大于目标值，则i不动，j--;若nums1[i] + nums1[j]小于目标值，则j不动，i++；直到nums1[i] + nums1[j]等于目标值时跳出。
4. 使用nums.indexOf(nums1[i])和nums.lastIndexOf(nums1[j])对原数组进行查找。得到答案

**代码：**

```
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

    ret.push(nums.indexOf(nums1[i]));
    ret.push(nums.lastIndexOf(nums1[j]));
    return ret;
};

```