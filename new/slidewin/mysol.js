function maxSubarraySum(values, num) {
    // let just call it off
    if(values.length < num) return 0;
    // set max value
    let max = 0
    // for loop to sum first window
    for (let i = 0; i < num; i++) {
        values[i] //?
        max = max + values[i] //?
    }
    max
    for (let j = 0; j < num; j++) {
               
    }

}

maxSubarraySum([1,2,5,2,8,1,5], 2)
//maxSubarraySum([1,2,5,2,8,1,5], 4)
//maxSubarraySum([4,2,1,6], 1)