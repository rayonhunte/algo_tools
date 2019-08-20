arr = [2, 6, 9, 2, 1, 8, 5, 6, 3]
num = 3
swFunc = (arr, num) => {
    let tempMax = 0;
    let maxSum = 0;
    if (arr.length < num) {
        return false
    }

    for (i = 0; i < num; i++) {
        arr[i] //?
        tempMax = arr[i] + tempMax
        tempMax
    }
    maxSum = tempMax
    maxSum

    for (i = num; i < arr.length; i++) {
        arr[i] //?
        maxSum = maxSum - arr[i - num] + arr[i] //?
        if (maxSum > tempMax) tempMax = maxSum
    }
    return tempMax
}


swFunc(arr, num) /*?*/

const maxSubarraySum = (arr, num) => {
    let max = 0;
    let temp = 0;
    if (arr.length < num) return null

    for (let i = 0; i < num; i++) {
        max += arr[i]
    }

    temp = max;
    temp

    for (let i = num; i < arr.length; i++) {
        temp = temp - arr[i - num] + arr[i]
        max = Math.max(max, temp) //?
    }
    return max
}

maxSubarraySum([], 2) //?
maxSubarraySum([100, 200, 300, 400], 2) //?
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) //?
maxSubarraySum([2, 3], 3) //?
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) //?
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) //?



// const minSubArrayLen = (arr, num) => {
//     let maxSum = 0;
//     let tempCount = 1;
//     let less = 0;
//     if (arr.length <= 0) return 0

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > num) return 1
//         maxSum = 0;
//         tempCount = 1; 
//         for (let j = 1; j < arr.length; j++) {
//             maxSum += arr[i] + arr[j]
//             maxSum //?
//             if (maxSum > num) {
//                 maxSum
//                 if (less === 0) less = tempCount
//                 else if (less > 0 || less > tempCount) less = tempCount
//                 break
//             } else {
//                 ++tempCount //?
//             }
//         }

//     }
//     return less
// }

const minSubArrayLen = (arr, num) => {
   for(let i=0; i<arr.length; i++) {
       arr[i] //?
       let slide = arr[i]
       let count = 1;
       for(let j=1; j< arr.length; j++) {
           slide += arr[j] //?
           if(slide > num) break
           count ++ //?           
       }
   }
    return 10

}


minSubArrayLen([2, 3, 1, 2, 4, 3], 7) //?
// minSubArrayLen([2,1,6,5,4], 9) //?
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) //?
// minSubArrayLen([4,3,3,8,1,2,3], 11) //?
// make sure