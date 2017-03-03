/**
 *  leetcode 14.Longest Common Prefix
 * */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs === null || strs.length === 0){
        return '';
    }
    let common = strs[0];
    let i,j;

    for (i = 0; i < strs.length; i++){
        while(strs[i].indexOf(common) !== 0){
            common = common.slice(0, common.length - 1);
        }
    }

    return common;
};