const arr = [5,3,4,1,9,13]

swap = (arr, index1 , index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

selSort2 = (arr) => {    
    for(let i=0;i<arr.length; i++) {
        let minVal = i;
        for(let j=1+i; j<arr.length; j++) {
            if (arr[j] < arr[minVal]) {
                minVal = j //?
            }   
        }
        swap(arr, i, minVal)
    }
    return arr
}

selSort2(arr) //?

