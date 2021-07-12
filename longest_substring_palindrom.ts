const expand = (s: string, begin: number, end: number): string => {
    while (begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
        begin--
        end++
    }
    return s.substring(begin + 1, end)
}


function longestPalindrome(s: string): string {
    if (!s || s.length <= 1) {
        return s
    }
    let longest: string = s.substring(0, 1)
    for (let i: number = 0; i < s.length; i++) {
        let temp: string = expand(s, i, i)
        if (temp.length > longest.length) {
            longest = temp
        }
        temp = expand(s, i, i + 1)
        if (temp.length > longest.length) {
            longest = temp
        }
    }
    return longest
};