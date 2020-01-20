const arr = [50,30,4,5,6,8,10]

const insertSort = (arr) => {
    for(let i=1;i<arr.length; i++) {
        let curval = arr[i] //? 
        for(var j=i-1; j >=0 && arr[j] > curval; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = curval; //? 
    }
    return arr
}

insertSort(arr)