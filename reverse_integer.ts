const reverse = x => {
    const limit: number = 2147483648;
    const k: number = x < 0 ? -1 : 1;
    const n: number = Number(String(Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};