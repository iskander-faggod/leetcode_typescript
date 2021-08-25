function climbStairs(n) {
    if (n == 1 || n == 0) {
        return 1;
    }
    var n1 = 1;
    var n2 = 2;
    for (var i = 3; i < n + 1; i++) {
        var n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
    return n2;
}
//# sourceMappingURL=climbing_stairs.js.map