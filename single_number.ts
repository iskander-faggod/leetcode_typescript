function singleNumber(nums: number[]): number {
    let mask: number = 0;
    for (let num of nums){
        mask ^= num
    }

    return mask;
};