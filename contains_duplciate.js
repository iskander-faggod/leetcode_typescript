function containsDuplicate(nums) {
    // @ts-ignore
    var setOfNums = new Set([]);
    var result = false;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (setOfNums.has(num)) {
            result = true;
        }
        setOfNums.add(num);
        console.log(setOfNums);
    }
    return result;
}
function containsDuplicate2(nums) {
    var duplicates = 0;
    nums.sort();
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            duplicates++;
        }
    }
    return duplicates != 0;
}
console.log(containsDuplicate([1, 2, 3, 1]));
//# sourceMappingURL=contains_duplciate.js.map