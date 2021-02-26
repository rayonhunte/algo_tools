one = "abcabcbb";
two = "bbbbb";
three = "pwwkew";
four = "bbtablud";
five = "au"
six = "dvdf"
seven = "anviaj"
eight = "tmmzuxt"




const lengthOfLongestSubstring = (s) => {
    if(s.length <= 1) {return s.length}
    p1 = 0
    p2 = 1
    max = 0
    let hash = {}; hash[s[p1]] = p1
    while(p2 < s.length) {
       if( !(hash[s[p2]]) ) {
            hash[s[p2]] = p2
            if(s.length > p2) {p2++}
       } else { 
            if (s[p2+1]) {
                rIndex = hash[s[p2]] + 1
                hash = {}
                hash[s[rIndex]] = rIndex
                p2 = rIndex
            }
            p2++
            
       }
       length = Object.keys(hash).length
       if( length> max) {max = length}
    } 
    return max
     
}

lengthOfLongestSubstring(one) //?



