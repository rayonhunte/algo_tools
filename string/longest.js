one = "abccabb";
two = "ccccccc";
three = "abcbda";




const longest = (s) => {
    if(s.length === 0) {return 0}
    let count = 0
    let maxCount = 0
    let repeat = ''

    for (i=0; i < s.length -1; i++){
        s[i] //?
        if(i === 0) {repeat = s[i]; count = count + 1} else {
            if(repeat !== s[i]) {
                count = count + 1
            } else {
                if(count > maxCount) { maxCount = count; count = 0}
            }
        }
        maxCount
    }
}



longest(one) //?