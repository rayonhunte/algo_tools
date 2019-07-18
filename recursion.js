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

const power = (num1, num2) => {
    sum = 0;
    const reSum = () => {
        if (num2 === 0 ) return;
        sum += num1 * num1; //?
        --num2
        reSum()
    }
    reSum()
    return sum; 
}


power(2,2) //?



