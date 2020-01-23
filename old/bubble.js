
arr = [10,25,1,88,44]

bSort = (arr) => {
    for(let i=0; i<arr.length; i++) { 
        for(let j=0; j<arr.length; j++) {
            if (arr[j]< arr[j+1]) {
                arr = swap(arr, j, j+1)
            }
        }
    }
    return arr
}


rSort = (arr) => {
    let noSwap = true;
    for(let i=arr.length; i > 0; i--) { 
        for(let j=0; j<i-1; j++) {
            if (arr[j]< arr[j+1]) {
                arr = swap(arr, j, j+1)
                noSwap = false
            }
        }
        if (noSwap) break
    }
    return arr
}

swap =  (arr, a1, a2) => {
    let temp = arr[a1]
    arr[a1] = arr[a2]
    arr[a2] = temp
    return arr
}

bSort(arr) /*?*/
rSort(arr) //?