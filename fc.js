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



let check ='cool' //?

for(let val in check){
    check[val] //?
}



const sameFrequency = (str1, str2) => {
    let isSame = true;
    const obj1 = {}
    const obj2 = {}
    if(str1.length !== str2.length) {return isSame = false}
    String(str1).split('').forEach(
        (e) => {
            if(!obj1[e]) {obj1[e] = 1} else {obj1[e] ++}
        }
    )
    String(str2).split('').forEach(
        (e) => {
            if(!obj2[e]) {obj2[e] = 1} else {obj2[e] ++}     
        }
    )
    obj1
    obj2
    for(let val in obj1) {
        if (obj1[val] !== obj2[val]) {
            isSame = false
        } //?

    }
    return isSame
}

sameFrequency(182,281) //?


const areThereDuplicates = (str) => {
    arguments[0] //?
} 

areThereDuplicates(1,2,3,4)