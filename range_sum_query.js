var NumArray = /** @class */ (function () {
    function NumArray(nums) {
        this.nums = nums;
    }
    NumArray.prototype.sumRange = function (left, right) {
        var sum = 0;
        for (var i = left; i <= right; i++) {
            sum += this.nums[i];
        }
        return sum;
    };
    return NumArray;
}());
var nums = [-2, 0, 3, -5, 2, -1];
var obj = new NumArray(nums);
console.log(obj.sumRange(0, 2));
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */ 
//# sourceMappingURL=range_sum_query.js.map