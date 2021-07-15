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

maxSubarraySum([1,2,5,2,8,1,5], 2) //?
//maxSubarraySum([1,2,5,2,8,1,5], 4)
//maxSubarraySum([4,2,1,6], 1)


