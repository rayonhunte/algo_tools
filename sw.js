arr = [2,6,9,2,1,8,5,6,3]
num = 3
swFunc = (arr, num) => {
    let tempMax = 0;
    let maxSum = 0;
    if (arr.length < num) {return false}
    for(i=0; i<num; i++) {
        tempMax = arr[i] + tempMax
    }
    maxSum = tempMax
    
    for(i=num; i<arr.length; i++){
        maxSum = maxSum - arr[i - num] + arr[i]
        if(maxSum > tempMax) tempMax = maxSum
    }
    return tempMax
}


swFunc(arr, num) /*?*/