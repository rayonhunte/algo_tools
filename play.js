// const nums = [3,2,4]
// const target = 6

// const twoSum = (nums, target) => {
//     const obj = {}
//     const points = []
//     nums.forEach((e, i) => {
//         if(e < target) {
//             obj[target - nums[i]] = i
//         } 
//     });
//     for (j in nums) {
//         if (nums[j] in obj) {
//             points.push(j)
//         }
//     }
//     return points
// }

// twoSum(nums, target) //?

// function test(value) {
    // let tSplit = value.split("/") //?
    // if(tSplit[0] < 10 ) {
    //     month = '0' + tSplit[0]
    // } else {
    //     month = tSplit[0]
    // }
    // if(tSplit[1] < 10 ) {
    //     day = '0' + tSplit[1]
    // } else {
    //     day = tSplit[1]
    // }
    // let newTime = tSplit[2] + month + day
    // newTime//? 

// }


// test("12/31/2014")

// let s1  = "string"

// s1.toUpperCase()


// function average(a, b) {
//     return (a + b) / 2;
//   }
  

//   average(10, 12) //?


// function removeProperty(obj, prop) {
//     if(obj === undefined) {return false}
//     if(obj[prop]) {
//         delete obj[prop]
//         console.log(obj)
//         return true
//     }
//     return false;
//   }


//   obj = {'name': 'mark'}

//   removeProperty(obj, 'name') //?

const arr1 = [1, 2, 3]
const arr2  = [9,4,1]

const same =  (arr1, arr2) => {
    // build obj 
    obj = {}
    value = 0
    // length of arrays
    if(arr1.length !== arr2.length) {return false}
    // build hash table
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i] * arr1[i]] = arr1[i]  
    }
    // loop through second array compare to has table 
    for (let i = 0; i < arr2.length; i++) {
        if(obj[arr2[i]] === undefined) {
            return false
        }
        if (value !== obj[arr2[i]]) {
            value = obj[arr2[i]]
        } else {
            return false;
        }
        
    }
    // in all cases return true
    return true; 

}

same(arr1, arr2) //?