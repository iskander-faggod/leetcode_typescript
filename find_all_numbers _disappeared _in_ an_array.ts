
function findDisappearedNumbers(nums: number[]): number[] {
    let result: number[] = [];
    // @ts-ignore
    const set = new Set(nums);
    const max = nums.length;
    //iterates n times
    for (let i = 1; i <= max; i++) {
        //O(1) operation
        set.has(i) ? result : result.push(i);
    }
    return result;
}