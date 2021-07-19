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


function minSubArrayLen(arr,num) {
   let l = 0
   let sum = 0
   let result = Number.MAX_SAFE_INTEGER

   for (let i = 0; i < arr.length; i++) {
       sum += arr[i]
       while(sum >= num) {
           result = Math.min(result, i - l + 1)
           sum -=arr[l++]
       }

   }
   return result === Number.MAX_SAFE_INTEGER ? 0 : result
}
// minSubArrayLen([2,3,1,2,4,3], 7) //?
// minSubArrayLen([2,1,6,5,4], 9) //?
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)//?

function findLongestSubstring(arr) {
    let l = 0
    let r = 0
    let max = 0
    let obj = {}
    while(r < arr.length){
        if(obj[arr[r]]) {
            delete obj[arr[l]]
            l++
        } else {
            obj[arr[r]] = 1
            r++
            max = Math.max(max, Object.keys(obj).length)
        }
    }
    return max
}

findLongestSubstring('') //?
findLongestSubstring('rithmschool') //?
findLongestSubstring('thisisawsome') //?
findLongestSubstring('bbbbbbb') //?
