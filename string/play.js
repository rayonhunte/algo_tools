one = "abcabcbb";
two = "bbbbb";
three = "pwwkew";
four = 'bbtablud';
five = "au"
six = "dvdf"
seven = "anviaj"




const lengthOfLongestSubstring = (s) => {
    if(s.length <= 1) {return s.length}
    let p1 = 0
    let p2 = 1
    max = 0
    let w = {}
    w[s[p1]] = p1
    count = 0
    
    while(p2 < s.length) {
        if(!w[s[p2]]) {
            console.log(w)
            w[s[p2]] = p2
            p2++
        } else {
            w = {}
            p1++
            w[s[p1]] = p1
            w
        }
        
        if ((Object.keys(w).length) > max) { max = Object.keys(w).length} 
    }

    return max
}

lengthOfLongestSubstring(four) //?