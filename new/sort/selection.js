"use strict"


const swap = (arr, e1, e2) => {
    let temp = arr[e1]
    arr[e1] = arr[e2]
    arr[e2] = temp
}


function selectSort(arr) {
    for(let i=0; i < arr.length; i++) {
        // set min as first value
        let min = i
        // start inner loop from second value 
        for (let j = i + 1; j < arr.length; j++) { 
            // if second value is larger than min update min
            if(arr[j] < arr[min]) {
               min = j
            }     
        } 
        // swap if i is not min
        if(i !== min) {
            swap(arr, i, min)
        }
    }
    return arr
}

let arr = [1,5,7,8,10,3]

selectSort(arr) //?