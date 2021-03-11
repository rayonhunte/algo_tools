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

// isPalindrome(s7) //?

// isPal(s4) //?



const isPalindrome_2 = (s) => {
    let p1 = 0 
    let p2 = s.length -1 
    while(p1 < p2) {
        if( s[p1] !== s[p2]) {
            return [p1,p2]
        } else {
            p1++
            p2--
        }
    }

    return true
}

const validPalindrome = (s) => {
    if(s.length <=2) {return true}
    let bs = s.replace(/[^a-z0-9]+/gi,"").toLowerCase() /*?*/
    let remove = isPalindrome(bs) /*?. */
    if(remove !== true) {
         let n = s.substring(0,remove[0])
         let n2 = s.substring(0,remove[1])
         n = n + s.substring(remove[0]+1, s.length);
         n2 = n2 + s.substring(remove[1]+1, s.length);
         let isn = typeof isPalindrome(n) === 'boolean'? true : false  
         if(!isn){
            let isn2 = typeof isPalindrome(n2) === 'boolean'? true : false
            return isn2
         } else {
             return true
         }
    }
    
    return true
}

validPalindrome(s8)/*?. */