function missingNumber(nums) {
    var n = nums.length;
    var sum = nums.reduce(function (sum, num) { return sum + num; });
    return n * (n + 1) / 2 - sum;
}
;
console.log(missingNumber([3, 0, 1]));
//# sourceMappingURL=missing_number.js.map