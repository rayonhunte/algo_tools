one = "abcabcbb";
two = "bbbbb";
three = "pwwkew";
four = 'pwwkew';
five = "au"
six = "dvdf"
seven = "anviaj"


const lengthOfLongestSubstringOne = (s) => {
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

const lengthOfLongestSubstringTwo = (s) => {
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

// optimal 
const lengthOfLongestSubstring = (s) => {
    if(s.length <= 1) {return s.length}
    let i = 0
    let j = 0
    let max = 0 
    let hash = []
    while(j < s.length) {
         if(hash.includes(s[j])){
              hash.splice(0,1)
              i++
         } else {
              hash.push(s[j])
              let count = j - i + 1
              if(max < count) {max = count}
              j++
         }
    }
    return max
}

lengthOfLongestSubstring(seven) //?

