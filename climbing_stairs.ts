function climbStairs(n: number): number {
    if (n == 1 || n == 0) {
        return 1;
    }
    let n1: number = 1;
    let n2: number = 2;

    for (let i = 3; i < n + 1; i++) {
        let n3: number = n1 + n2;
        n1 = n2;
        n2 = n3
    }

    return n2;
}

