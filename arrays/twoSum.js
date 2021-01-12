"user strict"
/* 
   given an array return the two indexes of the numbers that add up to the target number.  
*/


const nums = [1,3,7,9,2]

const twoSum = (nums, target) => {
    const addUp = {}
    for(i=0; i < nums.length; i++) {
       if (addUp[nums[i]] === undefined) {
         addUp[target - nums[i]] = i
       } else {
         return [addUp[nums[i]], i]
       } 
    }
    
  }
  
  console.log( twoSum(nums, 11) )