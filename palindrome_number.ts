function isPalindrome(x: number): boolean {
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }
    let revertedNum: number = 0;
    while (x > revertedNum) {
        revertedNum = revertedNum * 10 + x % 10;
        x /= 10;
    }

    return x == revertedNum || x == revertedNum / 10;
}

// const isPalindrome = function(x:number) : boolean {
//     return x === Number(x.toString().split("").reverse().join(""));
// };