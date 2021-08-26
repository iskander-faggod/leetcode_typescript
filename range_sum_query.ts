class NumArray {
    nums: number[];

    constructor(nums: number[]) {
        this.nums = nums;
    }

    sumRange(left: number, right: number): number {
        let sum: number = 0;
        for (let i = left; i <= right; i++) {
            sum += this.nums[i];
        }
        return sum;
    }
}

const nums = [-2, 0, 3, -5, 2, -1]
const obj = new NumArray(nums);
console.log(obj.sumRange(0, 2))
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */