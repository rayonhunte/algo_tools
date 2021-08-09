"user strict"

function swap(arr, l, r) {
    let temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp
}

function split(arr, l, r) {
    // get pivot point value 
    let p = arr[l]
    // pivot point left wall
    let lw = l    
    while(l < r) {
        while(arr[l] < p ) {
            l++
        }
        while(arr[r] > p){
            r--
        }
        swap(arr, l, r)
    }
    return l 
}

function quickSort(arr, l, r) {
    if(l < r) {
        p = split(arr, l, r)
        quickSort(arr, l, p)
        quickSort(arr, p+1, arr.length-1)
    }
    return arr
}
// let arr = [35,40,10,12,6,7]
let arr = [4, 5, 3, 7, 2]
quickSort(arr,0,arr.length-1) //?