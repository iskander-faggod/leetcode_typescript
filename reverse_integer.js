var reverse = function (x) {
    var limit = 2147483648;
    var k = x < 0 ? -1 : 1;
    var n = Number(String(Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};
//# sourceMappingURL=reverse_integer.js.map