'use strict'

const fcCount = (str1, str2) => {
    // convert strings to arrays
    const strA = str1.split("") 
    const strB = str2.split("")
    // check if lengths match no return false
    if(strA.length !== strB.length) return false

    let oBj1 = {}
    let oBj2 = {}
    
    for(let val in strA) {
         if (!oBj1[strA[val]]) {
             oBj1[strA[val]] = 1 
         } else {
            oBj1[strA[val]]++
         } /*?*/ 
    }

    for(let val in strB) {
        if (!oBj2[strB[val]]) {
            oBj2[strB[val]] = 1 
        } else {
            oBj2[strB[val]]++ 
        }/*?*/ 
    }
    oBj1
    oBj2
    for (let val  in oBj1) {
        if (oBj1[val] !== oBj2[val]) {
            return false
        }
    }
    return true
}


fcCount('looc', 'cool') /*?*/