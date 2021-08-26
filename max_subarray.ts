function maxSubArray(nums: number[]): number {
    let maxSum: number = nums[0];
    let curSum: number = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let num : number = nums[i]
        curSum = Math.max(curSum + num, num);
        maxSum = Math.max(curSum, maxSum);
    }
    return maxSum;
};