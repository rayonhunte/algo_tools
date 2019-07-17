// factor of input number
// 4*3*2*1
'user strict'
const num = 3; 

// non recursion
factor = (num) => {
    let total = 0;
    for(let i=num; i > 1; i--) {
        if(i==num){
            total = num
        } else {
            total = total * i
        }
    }
    return total
} 

// factor(num) //?


// recursion factor
const rFact = (num) => {
    num
    if (num !== 0 ){
        --num
        rFact(num)
     }
    return num 
}

rFact(9) //?

const yoRec = (num) => {
    let total = num * rFact(num)
    return total 
}

yoRec(4) //?





