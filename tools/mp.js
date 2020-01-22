arr = [-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7]


mpPoint = (arr) => {
    arr
    let left = 0;
    let right = arr.length -1 /*?*/;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) { 
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else { left++;}
    }
} 

mpPoint(arr) /*?*/


arr2 = [1,1,1,1,2].sort((a,b)=> {
    return a-b;
}) 
arr2

mgU = (arr2) => {
    let left = 0;
    let sum = 0;
    
    while (left < arr2.length) {
    if (arr2[left] !== arr2[left+1]) {
             sum++ /*?*/
         } 
        left++ 
    }
    return sum
}

mgU(arr2) /*?*/


const mpAvg = (arr, avg) => {
    let sum = 0;
    let status = false
    let left = 0;
    if(arr.length === 0) {return status}
    for(let i=0; i < arr.length;i++){
        left = arr[i] //?
        for(let r =1; r< arr.length; r++){
           sum = (arr[left] + arr[r]) / 2 //?
           if (sum === avg) {status = true; break} 
        }
        if(status === true) {break}
    }
    return status
}

mpAvg([1,3,3,5,6,7,10,12,19], 8) //?