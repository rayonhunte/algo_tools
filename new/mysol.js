"use strict"


const arr1 = [1, 2, 3]
const arr2  = [9,4,1]

const same =  (arr1, arr2) => {
    // build obj 
    let obj = {}
    let value = 0
    // length of arrays
    if(arr1.length !== arr2.length) {return false}
    // build hash table
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i] * arr1[i]] = arr1[i]  
    }
    // loop through second array compare to has table 
    for (let i = 0; i < arr2.length; i++) {
        if(obj[arr2[i]] === undefined) {
            return false
        }
        if (value !== obj[arr2[i]]) {
            value = obj[arr2[i]]
        } else {
            return false;
        }
    }
    // in all cases return true
    return true; 
}

same(arr1, arr2) //?