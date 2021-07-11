function twoSum(nums: number[], target: number): number[] {
    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = i + 1; i < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

const nums: number[] = [3, 2, 4]
const target: number = 6

console.log(twoSum([3, 2, 4],6))
