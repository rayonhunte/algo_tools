"use strict"
// my solution
function insert(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if(arr[j] > arr[i]) {
                arr.splice(j, 0, arr[i])
                arr.splice(i + 1, 1)
            }
        }
    }
    return arr
}

// course solution
function insertionSortList(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

let arr = [1,5,7,8,10,3,4, 6,9]
let arr2 = [2,1,9,76,4]
let arr3 = [4,2,1,3]

// [1,3,5,7,8,10]

// insert(arr)
console.log(insert(arr2)) //?
console.log(insert(arr3)) //?