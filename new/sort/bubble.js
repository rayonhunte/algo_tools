"use strict"


// bubble sort

const swap = (arr, e1, e2) => {
    let temp = arr[e1]
    arr[e1] = arr[e2]
    arr[e2] = temp
    console.log(arr)
}

function sortBubble(arr) {
    // user i as a reducing value
    let noSwap = true
    for (let i = arr.length; i >  0; i--) {
        // every time we swap reduce i
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]) {
                swap(arr, j, (j+1))
                noSwap = false
            }
        }
        if(noSwap) break
    }
    return arr
}
let arr = [1,5,7,8,10,3]
// sortBubble(arr) //?

