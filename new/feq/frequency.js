// freq counter
"use strict"

const same = (arr1, arr2) => {
    let obj1 = {}
    let obj2 = {}
    if (arr1.length !== arr2.length) return false;

    // build object
    for (let i = 0; i < arr1.length; i++) {
        let element = arr1[i]
        element
        if(obj1[element]) {
            obj1[element] = obj1[element] + 1
        } else {
            obj1[element] =  1
        }
    }

    // build object
    for (let j = 0; j < arr2.length; j++) {
        let element = arr2[j]
        element
        if(obj2[element]) {
            obj2[element] = obj2[element] + 1
        } else {
            obj2[element] =  1
        }
    }
    //loop over object
    for (let prop in obj1) {
        // get the number key square 
        let twoTimes = prop * prop
        // check if feq is equal
        if(obj1[prop] !== obj2[twoTimes]) return false
    }

    return true 

}



const arr1 = [1, 2, 3,2, 6]
const arr2  = [9,4,1, 4, 36]

same(arr1, arr2) //?


const validAnagram = (arr3, arr4) => {
    let obj1 = {}
    let obj2 = {}
    // check sting length
    if (arr3.length !== arr4.length) return false;
      // build object
      for (let i = 0; i < arr3.length; i++) {
        let element = arr3[i]
        if(obj1[element]) {
            obj1[element] = obj1[element] + 1
        } else {
            obj1[element] =  1
        }
    }

    // build object
    for (let j = 0; j < arr4.length; j++) {
        let element = arr4[j]
        if(obj2[element]) {
            obj2[element] = obj2[element] + 1
        } else {
            obj2[element] =  1
        }
    }

    for(let prop  in obj1) {
        if(obj1[prop] !== obj2[prop]) return false 
    }

    return true

}

//const arr3 = "aaabbx"
// const arr4  = "xaaabb"

// validAnagram(arr3, arr4)//?


function sameFrequency(num1, num2) {
    if(num1.length !== num2.length) return  false
    let obj1 = {}
    let obj2 = {}
    for(let v of num1.toString()) {
        obj1[v] === undefined ? obj1[v] = 1 : obj1[v]++ 
    }
    obj1
    for(let v of num2.toString()) {
        obj2[v] === undefined ? obj2[v] = 1 : obj2[v]++ 
    }
    obj2
    for(const o in obj1) {
        if (obj1[o] !== obj2[o]) return false
    }
    
    return true;
}

let num1 = 182
let num2 = 281

sameFrequency(num1, num2) //?


function areThereDuplicates(...str) {
    if(str.length <= 0) return false
    let obj1 = {}
    for(let v of str) {
        obj1[v] === undefined ? obj1[v] = 1 : obj1[v]++
    }
    for(let v of str) {
        if(obj1[v] > 1) return true
    }
    return false
}

areThereDuplicates(1,2,3,3)//?