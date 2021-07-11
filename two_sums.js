function twoSum(nums, target) {
    for (var i = 0; i < nums.length-1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}
var nums = [3, 2, 4];
var target = 6;
console.log(twoSum([3, 2, 4], 6));
//# sourceMappingURL=two_sums.js.mapconst twoSum = (nums, total) => {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === total) {
//         return [nums[i], nums[j]];
//       }
//     }
//   }
// };