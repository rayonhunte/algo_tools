// const input = [-2,1,-3,4,-1,2,1,-5,4]
// const nums = [-2,1,-3,4,-1,2,1,-5,4]
// const nums = [-2,1]
// const nums = [-2,-1]
// const nums = [1,2]

// const cunSum = (nums) => {
//     if(nums.length === 0) return 0
//     if(nums.length === 1) return nums[0]
//     let number = 0;
//     for(i=0; i < nums.length; i++) {
//      if(nums[i] > 0 || nums[i] < 0 && nums[i+1] < 0) {
//          if(nums[i+1]){
//             if(nums[i] + nums[i+1] > 0) {
//                 nums[i] //?
//                 nums[i+1] //?
//                 number += nums[i] +  nums[i+1] 
//             }
//             if(nums[i]+nums[i+1] < 0) {
//                 number += nums[i] - nums[i+1]
//             }
//          } else if(!nums[i+1] && nums[i] > 0 &&  nums.length === 2) {
//             number += nums[i]
//         }
       
//      }
//     }
//     return number //?
// }


const cunSum = (nums) => {
    if(nums.length === 0) return 0
    if(nums.length === 1) return nums[0]
    let sum = nums[0]
    let number = sum
    for(i=1; i < nums.length; i++) {
        sum
        sum += nums[i]
        sum
        if (nums[i]> sum) {
            sum = nums[i]
        }
        if (sum > number) {
            number = sum
        }      
    }
    return number //?
}


// cunSum(nums) 

// const zero = [0,1,0,3,12]
const zero = [0,0,1]

const moveZero = (nums) => {
    let count = 0
    let length = nums.length
    while( length >= 1) {
        if(nums[count] === 0) {
            nums[count] //?
            nums.splice(count, 1)
            nums.push(0)
        } else {
            nums.length //?
        }
        count++ //?
        length-- //?
    } 

    return nums //?
}

moveZero(zero)