function maxSubArray(nums) {
    var maxSum = nums[0];
    var curSum = nums[0];
    for (var i = 1; i < nums.length; i++) {
        var num = nums[i];
        curSum = Math.max(curSum + num, num);
        maxSum = Math.max(curSum, maxSum);
    }
    return maxSum;
}
;
//# sourceMappingURL=max_subarray.js.map