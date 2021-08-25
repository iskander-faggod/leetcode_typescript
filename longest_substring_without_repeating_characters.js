function lengthOfLongestSubstring(s) {
    // @ts-ignore
    var set = new Set();
    var right = 0;
    var left = 0;
    var maxSubstringLength = 0;
    while (right < s.length) {
        if (!set.has(s.charAt(right))) {
            set.add(s.charAt(right));
            maxSubstringLength = Math.max(maxSubstringLength, set.size);
            right++;
        }
        else {
            set["delete"](s.charAt(left));
            left++;
        }
    }
    return maxSubstringLength;
}
//# sourceMappingURL=longest_substring_without_repeating_characters.js.map