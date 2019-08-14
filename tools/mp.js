// arr = [-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7]


// mpPoint = (arr) => {
//     arr
//     let left = 0;
//     let right = arr.length -1 /*?*/;
//     while (left < right) {
//         let sum = arr[left] + arr[right];
//         if (sum === 0) { 
//             return [arr[left], arr[right]]
//         } else if (sum > 0) {
//             right--;
//         } else { left++;}
//     }
// } 

// mpPoint(arr) /*?*/


// arr2 = [1,1,1,1,2].sort((a,b)=> {
//     return a-b;
// }) 
// arr2

// mgU = (arr2) => {
//     let left = 0;
//     let sum = 0;

//     while (left < arr2.length) {
//     if (arr2[left] !== arr2[left+1]) {
//              sum++ /*?*/
//          } 
//         left++ 
//     }
//     return sum
// }

// mgU(arr2) /*?*/

// const mpCheck = (arr, val) => {
//     left = 0;
//     while (left < arr.length) {
//         arr[left] //?

//         left++
//     }
// }

// mpCheck([1,2,3], 2.5)


const checkString = (str1, str2) => {
    let status = false;
    const one = str1.split('') //?
    const two = str2.split('') //?
    let i = 0;
    for (r = 0; r < one.length; r++) {
        for (i; i < two.length; i++) {
         if(one[r] === two[i]) {
            if (r + 1 < one.length && i + 1 >= two.length) {
                         status = false;
                         break
            }
            status = true
            i++
            break
         }
        }
    }
    return status
}

checkString('abc', 'acb') //?
