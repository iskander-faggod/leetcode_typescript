function containsDuplicate(nums: number[]): boolean {
    // @ts-ignore
    const setOfNums = new Set([]);
    let result: boolean = false;
    for (let num of nums) {
        if (setOfNums.has(num)) {
            result = true;
        }
        setOfNums.add(num);
        console.log(setOfNums)
    }
    return result
}

function containsDuplicate2(nums: number[]): boolean {
    let duplicates: number = 0;
    nums.sort()
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            duplicates++;
        }
    }
    return duplicates != 0;
}

console.log(containsDuplicate([1, 2, 3, 1]))