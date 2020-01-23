// first try
const arr1 = [0, 3, 4, 31]
const arr2 = [4, 6, 30]


const mergeSortOne = (arr1, arr2) => {
    if(arr1.length === 0) return arr2
    if(arr2.length === 0) return arr1

    const mergedArray = []
    let item1 = arr1[0]
    let item2 = arr2[0]
    let i = 1;
    let j = 1;

    while(item1 || item2) {
        if(item2 === undefined || item1 < item2) {
            mergedArray.push(item1)
            item1 = arr1[i]
            i++
        } else {
            mergedArray.push(item2)
            item2 = arr2[j]
            j++
        }
    }

    return mergedArray //?

}
// mergeSortOne(arr1, arr2)


// const nums = [2, 7, 11, 15]; 
const nums = [3,2,3]
const target = 6

const twoSum = (nums, target) => {
   for(i=0; i <= nums.length -1; i++) {
      for(j=i+1; j<= nums.length -1; j++){
          if(nums[i] + nums[j] === target) {
              return [i, j]
          }  
      }
   }
} 


// var kidTwoSum=function(nums, target){
    
//     var k={}; 
  
//     for(i=0;i < nums.length; i++){
       
    
//         if(k[nums[i]]){
//             k[target-nums[i]]=i;
//         }else{
//             return [k[nums[i]],i];
//         }
//     }
// }

twoSum(nums, target) //?
// kidTwoSum(nums,target) // ?


