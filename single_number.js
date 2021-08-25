function singleNumber(nums) {
    var mask = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        mask ^= num;
    }
    return mask;
}
;
//# sourceMappingURL=single_number.js.map