function getMiddle(s) {
    //Code goes here!
    if (s.length % 2 != 0) {
        return s[s.length / 2]
    }
}

console.log(getMiddle('testing'))