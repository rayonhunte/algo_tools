"use strict"
function linerSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === value) return i
    }
    return -1
}

let arr = [1,2,3,4,5]
// linerSearch(arr, 10) //?
// let arr = [5,6,10,13,14,18]

function binarySearch(arr, v){
    // add whatever parameters you deem necessary - good luck!
    let l = 0;
    let r = arr.length -1
    let m = Math.floor((l + r) /2)
    while(arr[m] !== v && l <= r){
       if(v < arr[m]) { r = m -1} else { l = m + 1} 
       m = Math.floor((l + r) /2)
    }
    return arr[m] === v? m : -1
}

// binarySearch(arr,3) //?

function searchString(l, s) {
    let count = 0;
    let max = 0
    for (let i = 0; i < l.length; i++) {
        for (let j = 0; j < s.length ; j++) { 
            if(l[i+j] === s[j]) {
               count = count + 1 
               if(count === s.length ) max += 1
           } else { count = 0; break}
        }
    }
    return max
}
let long = 'oneonetqone'
let short = 'one' 

searchString(long, short) //?



