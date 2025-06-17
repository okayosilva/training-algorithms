const reverseWords = (s) => {
    let l = 0
    let res = ""

    for(let r = 0; r <= s.length; r++) {
        if(s[r] === " ") {
            res += [...s.slice(l, r+1)].reverse().join("")
            l = r + 1
        } 
    }

    res += ` ${[...s.slice(l)].reverse().join('')}`
    let resultReverseWords = res.slice(1) 
    return resultReverseWords
}
