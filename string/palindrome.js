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
    if(s.length <=1) {return true}
    let bs = s.replace(/[^a-z0-9]+/gi,"").toLowerCase()
    let p1 = 0 //?
    let p2 = bs.length -1 //?
    let oe = bs.length % 2 //?
    while(oe === 0? p1 < p2 : p1 !== p2) {
        if( bs[p1] !== bs[p2]) {
            return false;
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
}

//isPalindrome(s7) //?

isPal(s4) //?


