function findDisappearedNumbers(nums) {
    var result = [];
    // @ts-ignore
    var set = new Set(nums);
    var max = nums.length;
    //iterates n times
    for (var i = 1; i <= max; i++) {
        //O(1) operation
        set.has(i) ? result : result.push(i);
    }
    return result;
}
//# sourceMappingURL=find_all_numbers%20_disappeared%20_in_%20an_array.js.map