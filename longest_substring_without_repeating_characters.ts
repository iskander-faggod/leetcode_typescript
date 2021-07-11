function lengthOfLongestSubstring(s: string): number {
    // @ts-ignore
    let set = new Set<string>();
    let right: number = 0;
    let left : number = 0;
    let maxSubstringLength: number = 0;

    while (right < s.length) {
        if (!set.has(s.charAt(right))) {
            set.add(s.charAt(right));
            maxSubstringLength = Math.max(maxSubstringLength, set.size);
            right++;
        } else {
            set.delete(s.charAt(left));
            left++;
        }
    }
    return maxSubstringLength;
}