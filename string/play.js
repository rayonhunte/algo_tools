"use strict"
// let s1 = "aabaa"
// let s2 = "aabbaa"
// let s3 = "abc"
// let s4 =  "a"
// let s5 =  ""
// let s6 = "A man, a plan, a canal: Panama"
// let s7 ="race a car"

let s1 = "raceacar"
let s2 = "abccbda"
let s3 = "abcdefdba"
let s4 = ""
let s5 = "a"
let s6 = "ab"

const isPalindrome = (s) => {
    let p1 = 0 //?
    let p2 = s.length -1 //?
    let oe = s.length % 2 //?
    while(oe === 0? p1 < p2 : p1 !== p2) {
        if( s[p1] !== s[p2]) {
            return [s[p1],s[p2]]
        } else {
            s[p1] //?
            s[p2] //?
            p1++
            p2--
        }
    }

    return true
}

const isPal = (s) => {
    if(s.length <=2) {return true}
    let bs = s.replace(/[^a-z0-9]+/gi,"").toLowerCase()
    bs
    let remove = isPalindrome(bs) //?
    if(remove !== true) {
         let nbs = bs.replace(remove[0], '')
         let nbs2 = bs.replace(remove[1], '')
         nbs
         nbs2
         if (!isPalindrome(nbs)){
          if (!isPalindrome(nbs2)){return false}
          } 
    }

    
    return true
}

//isPalindrome(s7) //?

isPal(s3) //?

