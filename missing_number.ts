function missingNumber(nums: number[]): number {
    const n: number = nums.length;
    const sum: number = nums.reduce((sum, num) => sum + num)
    return n * (n + 1) / 2 - sum;
};


console.log(missingNumber([3, 0, 1]))