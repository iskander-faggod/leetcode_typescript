var expand = function (s, begin, end) {
    while (begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
        begin--;
        end++;
    }
    return s.substring(begin + 1, end);
};
function longestPalindrome(s) {
    if (!s || s.length <= 1) {
        return s;
    }
    var longest = s.substring(0, 1);
    for (var i = 0; i < s.length; i++) {
        var temp = expand(s, i, i);
        if (temp.length > longest.length) {
            longest = temp;
        }
        temp = expand(s, i, i + 1);
        if (temp.length > longest.length) {
            longest = temp;
        }
    }
    return longest;
}
;
//# sourceMappingURL=longest_substring_palindrom.js.map