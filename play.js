"user strict"
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

// same(arr1, arr2) //?

function splitPairs(arr) {
    if(arr.length < 1) return []
    // if(arr.length === 1) return [arr[0]+'_']
    // set pointers
    let l = 0
    let r = 1
    str = []
    while(r < arr.length){
            str = str.concat(arr[l]+ arr[r])
            r += 2
            l +=2
    }
    if(arr[l]) str = str.concat(arr[l]+'_') 
    return str     
}

// splitPairs('abcd') //?
// splitPairs('abc') //?
// splitPairs('abcdf') //?
//  splitPairs('a') //?
// splitPairs('') //?

function beginningZeros(str) {
    if(str.length < 1) return 0
    let count = [] 
    for(let v of str) {
        if(v === '0') {count.push(v)}
        else {
            break
        }  
    }
    return count.length 
}

beginningZeros('100')//?  
beginningZeros('001')//?  
beginningZeros('100100')//?
beginningZeros('001001') //?
beginningZeros('012345679') //?
beginningZeros('0000') //?


// function nearestValue() {

// }

// nearestValue([4, 7, 10, 11, 12, 17], 9) == 10
// nearestValue([4, 7, 10, 11, 12, 17], 8) == 7
// nearestValue([4, 8, 10, 11, 12, 17], 9) == 8
// nearestValue([4, 9, 10, 11, 12, 17], 9) == 9
// nearestValue([4, 7, 10, 11, 12, 17], 0) == 4


function simpleArraySum(ar) {
    // Write your code here
    let sum = 0;
    if (ar.length === 0) return sum
    return sum = ar[0] + simpleArraySum(ar.slice(1))
}
// simpleArraySum([4, 7, 10, 11, 12, 17]) //?


function compareTriplets(a, b) {
    // Write your code here
    if(a.length !== b.length) [0,0]
    let score = [0,0]
    for (let i = 0; i < a.length; i++) {
        score[0] += a[i] > b[i] && a[i] !== b[i]? 1 : 0
        score[1] += a[i] < b[i] && a[i] !== b[i]? 1 : 0
    }
    return score
}

// compareTriplets([1,5,9],[1,6,9]) //?

function diagonalDifference(arr) {
    // Write your code here
    let lSum = 0;
    let rSum = 0;
    let back = arr.length -1
    for (let i = 0; i < arr.length; i++) {
        lSum += arr[i][i]  //?
        rSum += arr[i][back]//?
        back--
    }
    lSum 
    rSum
    return Math.abs(lSum - rSum)
}

let someD = [
    [11,2,4],
    [4,5,6],
    [10,5,-12]
]

let someB = [
    [1,2,3],
    [4,5,6],
    [9,8,9]
]

diagonalDifference(someB) //?
