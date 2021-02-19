one = "abcabcbb";
two = "bbbbb";
three = "pwwkew";
four = 'pwwkew';
five = "au"
six = "dvdf"


const lengthOfLongestSubstring = (s) => {
    if(s.length === 0) {return 0}
    if(s.length === 1) {return 1} 
    let count = 0
    let maxCount = 0
    let repeat = []

    for (i=0; i < s.length; i++){
        s[i] //?
        if(repeat.length === 0) {
            repeat.push(s[i]); count = count + 1
        } else {
            s[i] //?
            if(!repeat.includes(s[i])) {
                count ++
                repeat.push(s[i])
            } else {
                count 
                repeat = [s[i]]
                count = 1
            }
            if(maxCount < count) {maxCount = count} 
            repeat
        }
    }
    return maxCount
}


lengthOfLongestSubstring(six) //?
// lengthOfLongestSubstring(five) //?

// lengthOfLongestSubstring(one)

// lengthOfLongestSubstring(two) //?

// lengthOfLongestSubstring(three) //?

// lengthOfLongestSubstring(four) //?

// h = ['a','v']
// if(h.includes('v')) {
//     h 
// } else {
//     h
// }