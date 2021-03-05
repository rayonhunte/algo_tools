"use strict"

let one = "abcabcbb";
let two = "bbbbb";
let three = "pwwkew";
let four = "bbtablud";
let five = "au"
let six = "dvdf"
let seven = "anviaj"
let eight = "tmmzuxt"
let nine = "qrsvbspk"



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


lengthOfLongestSubstring(four) //?
//lengthOfLongestSubstring(nine) //?




const lengthOfLongestSubstringTwo = (s) => {
     if(s.length <= 1) {return s.length}
     let i = 0
     let j = 0
     let max = 0 
     let hash = {}
     while(j < s.length) {
          if(s[j] in hash){
               if(j > i) {
                    i = hash[s[j]] + 1
                    hash[s[j]] = j
               }
               j++
          } else {
               hash[s[j]] = j
               let count = j -i +1
               if(max < count) {max = count}
               j++
          }
     }
     return max
}

lengthOfLongestSubstringTwo(five) //?

