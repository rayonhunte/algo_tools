one = "abcabcbb";
two = "bbbbb";
three = "pwwkew";
four = 'pwwkew';
five = "au"
six = "dvdf"
seven = "anviaj"


// const lengthOfLongestSubstring = (s) => {
//     if(s.length === 0) {return 0}
//     if(s.length === 1) {return 1} 
//     let count = 0
//     let maxCount = 0
//     let repeat = []

//     for (i=0; i < s.length; i++){
//         s[i] //?
//         if(repeat.length === 0) {
//             repeat.push(s[i]); count = count + 1
//         } else {
//             s[i] //?
//             if(!repeat.includes(s[i])) {
//                 count ++
//                 repeat.push(s[i])
//             } else {
//                 if (s[i] !== s[i -1]) {
//                     repeat = [s[i-1]]
//                     i--
//                 } else {
//                     repeat = [s[i]] 
//                 }
//                 count = 1
//             }
//             if(maxCount < count) {maxCount = count} 
//             repeat
//         }
//     }
//     return maxCount
// }

// force method

const lengthOfLongestSubstring = (s) => {
    if(s.length <= 1) {return s.length}
    let maxCount = 0
    let repeat = []
    rIndex = 0;
    for (i = 0; i < s.length; i++) {
        if (repeat.length === 0) {
            repeat.push(s[i]);
        } else {
            if(!repeat.includes(s[i])) {
                repeat.push(s[i])
            } else {
                rIndex++
                i = rIndex
                repeat = [s[i]]
            }
            if(maxCount < repeat.length) {maxCount = repeat.length}
        }
    }
    return maxCount
}

// sliding window

const side = (s) => {
    if(s.length <= 1) {return s.length}
    maxCount = 0
    p1 = 0
    p2 = 1
    count = 1;
    window = {}
    window[s[p1]] = count
    while (p2 <= s.length -1 ) {
        if(!window[s[p2]]) {
            window[s[p2]] = count
            count ++
            p2++
        } else {
            p1++
            p2 = p1 + 1
            window = {}
            window[s[p1]] = count
            count = 1
        }
        if(maxCount < count) {maxCount = count}
        
    }
    return maxCount
}

"anviaj"
side(seven) //?

// lengthOfLongestSubstring(one) //?


