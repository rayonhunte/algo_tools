"user strict"
/* 
   given an array return the two indexes of the numbers that add up to the target number.  
*/


const nums = [1, 3, 7, 9, 2]

const twoSum = (nums, target) => {
    // create an object
    const addUp = {}
    // loop through the array
    for (i = 0; i < nums.length; i++) {
        // check to make sure the value does not exist
        if (addUp[nums[i]] === undefined) {
            // sub the target value from the value at the current pointer
            // make the result the key   
            addUp[target - nums[i]] = i
        } else {
            // return the index on the numbers that add up to the target
            addUp
            return [addUp[nums[i]], i]
        }
    }
}

// logical progression looking for the remainder
// after the value of the pointer is removed from the traget the remainder is the answer
11 -1 //?
11- 3 //?
11-7 //?
11 - 9 //?

console.log(twoSum(nums, 11))