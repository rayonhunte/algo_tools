"use strict"


// which are they two numbers in the array that sum to zero



const sumZero = (arr) =>  {
    //check if array length is more than 2
    if(arr.length < 2) return []
    // set two point 
    let start = 0;
    let end = arr.length -1

    
    while(start < end) {
        // sum the value of the two pointers
        let base = (arr[end] + arr[start])
        //  check if the  value is zero
        if(base === 0) return [arr[start], arr[end]]
        // move pointer if based on the value of vase
        base < 0 ? start = start +1 : end = end -1
    }
    // return empty loop if now sums  equal to zero
    return []
}


const arr = [-4,-3,-2,-1,0,1,2,3,4,5]

// sumZero(arr) //?


const countUniqueValue = (arr2) => {
    if(arr2.length === 1 ) return 1
    let start = 0
    let count = 0;
    while (start < arr2.length) {
        if(arr2[start] !== arr2[start + 1]) {
            count = count + 1
        } 
        start++
    }
    return count; 

}


const arr2 = [1,2,3,4,4,7]

countUniqueValue(arr2) //?


function averagePair(arr, n) {
    if(arr.length < 2) return false
    let start = 0
    let end = arr.length -1  
    let avg = 0
    while(start < end) {
        avg = (arr[start] + arr[end]) /2
        if(avg === n) return true
        if(avg < n ) {
            start++
        } else {
            end--
        }
    }
    return false
}

averagePair([1,2,3], 2.5) //?
averagePair([1,3,3,5,6,7,10,12,19], 8) //?
averagePair([-1,0,3,4,5,6], 4.1) //?
averagePair([], 4) //?


function isSubsequence(arr1, arr2) {
    let l = 0
    let r = 0
    while(r < arr2.length) {
        if(arr1[l] === arr2[r]) {
            if(l === arr1.length -1) return true
            l++
            r++
        }
        else {
            r++
        }
    }
    return false
}

// isSubsequence('hello', 'hello world') //?
// isSubsequence('sing', 'sting') //?
isSubsequence('abc', 'acb') //?
