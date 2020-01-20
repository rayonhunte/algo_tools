'use strict'

const str1 = 'cool'
const str2 = 'xxxxx'



const check = (str1, str2) => {
    let ob1 = {}; //?
    let status = 'NO';
    for(let i in str2) {
        ob1[str2[i]]  = i;
    }
    for(let i in str1) {
        if (ob1[str1[i]]) {
            status = 'YES'
            break;
        }
    }
    return status
}  

check(str1, str2) //?

