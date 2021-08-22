function twoSum(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; i < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}
var nums = [3, 2, 4];
var target = 6;
console.log(twoSum([3, 2, 4], 6));
//# sourceMappingURL=two_sums.js.map