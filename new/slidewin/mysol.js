"use strict"
function maxSubarraySum(values, num) {
    // let just call it off
    if(values.length < num) return null;
    // set max value
    let max = 0;
    let tempSum = 0;
    // for loop to sum first window
    for (let i = 0; i < num; i++) {
        max = max + values[i]
    }
    tempSum = max
    for (let j = num; j < values.length; j++) {
        // if the value is greater than the sum of the previous window
        tempSum = tempSum - values[j - num] + values[j]
        max = Math.max(tempSum, max) 
    }
    return max;
}

// maxSubarraySum([1,2,5,2,8,1,5], 2) //?
//maxSubarraySum([1,2,5,2,8,1,5], 4)
//maxSubarraySum([4,2,1,6], 1)


function minSubArrayLen(arr,  num) {
    let l = 0
    let r = 1
    let minCount = 0
    let maxSum = 0
    while(r < arr.length -1) {
        // if l is max return 1
        if(arr[l] >= num) return 1
        //
        maxSum === 0 ? maxSum = arr[l] + arr[r] : maxSum += arr[r]
        if(maxSum >= num){   
            l++ 
            r = l + 1
            maxSum = 0
        } else {
            minCount++
            r++
        }
        
    } 
    return minCount
}


// minSubArrayLen([2,3,1,2,4,3], 7) //?
minSubArrayLen([2,1,6,5,4], 9) //?
//minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)//?



