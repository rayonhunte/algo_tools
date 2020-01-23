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
    if (num1 === 0) return 1
    sum = 1;
    const reSum = () => {
        if (num2 === 0 ) return num1;
        sum //?
        sum = sum * num1; //?
        --num2
        reSum()
    }
    reSum()
    return sum; 
}


power(2,4) //?



const toFactor = (num) => {
    let sum = 1;
    const help = (num) => {
        if (num === 0) return 
        if (num === 1) return 1
        sum = sum * num--
        help(num)
    }
    help(num)
    return sum;
}

toFactor(1) //?


const toArray = (array) => {
    let min = 0;
    let sum = 1;
    if (array.length === 0) return
    if (array.length === 1) return array[0]  
    let howLong = array.length
    const help = (array) => {
        if (min < howLong) sum = sum * array[min] //?
        else {return sum}
        min++
        help(array)    
    }
    help(array)
    return sum
}

toArray([1,2,3]) //?

function recursiveRange(num){
    let max = 0;
    num
    const helper = (num) =>  {
        num
        if (num === 0) return
        else {
            max += num--
            num
            helper(num)
        }
    }
    helper(num)
    return max;
   }

recursiveRange(6) //? 

const fib = (num) => {
    n = 0;
    sum = 1;
    const help = (num) => { 
        num
        if (num > 1) {
            sum += --sum + n  -2
            num --
            sum
            n
            n++
            help(num)
        }
        else {return }
    }
    help(num)
    return sum
}

fib(10) //?

