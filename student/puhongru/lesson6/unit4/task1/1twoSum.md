**����������**

1.Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,

return [0, 1].

**����˼·��**

1. ���ȶ�������п���;
2. �ٶԿ����������������;
3. ��ʹ��ָ��i��ָ��j��i�ӵ�һ������ʼ��j�����һ������ʼ����nums1[i] + nums1[j]����Ŀ��ֵ����i������j--;��nums1[i] + nums1[j]С��Ŀ��ֵ����j������i++��ֱ��nums1[i] + nums1[j]����Ŀ��ֵʱ������
4. ʹ��nums.indexOf(nums1[i])��nums.lastIndexOf(nums1[j])��ԭ������в��ҡ��õ���

**���룺**

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