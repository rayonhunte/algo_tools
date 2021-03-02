"use strict"

let one = "abcabcbb";
let two = "bbbbb";
let three = "pwwkew";
let four = "bbtablud";
let five = "au"
let six = "dvdf"
let seven = "anviaj"
let eight = "tmmzuxt"




// const lengthOfLongestSubstring = (s) => {
//     if(s.length <= 1) {return s.length}
//     p1 = 0
//     p2 = 1
//     max = 0
//     let hash = {}; hash[s[p1]] = p1
//     while(p2 < s.length) {
//        if( !(hash[s[p2]]) ) {
//             hash[s[p2]] = p2
//             if(s.length > p2) {p2++}
//        } else { 
//             if (s[p2+1]) {
//                 rIndex = hash[s[p2]] + 1
//                 hash = {}
//                 hash[s[rIndex]] = rIndex
//                 p2 = rIndex
//             }
//             p2++
            
//        }
//        length = Object.keys(hash).length
//        if( length> max) {max = length}
//     } 
//     return max
     
// }
"abcabcbb"
"pwwkew"
"bbtablud"

const lengthOfLongestSubstring = (s) => {
    if(s.length <= 1) {return s.length}
    let max = 0
    let p1 = 0
    let p2 = 1
    let seen = {}; seen[s[p1]] = p1

    while(p2 < s.length) {
       if( (seen[s[p2]])  ) {
            p1++
            seen = {};
            p2 = p1 + 1
       } else {
            seen[s[p2]] = p2
            p2++
            seen
            let cv = Object.keys(seen).length //?
            if(max < cv) {max = cv}            
       }
    }
    return max
}



lengthOfLongestSubstring(four) //?



