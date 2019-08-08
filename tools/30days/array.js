"use strict"


const arr = [1,4,3,2];

const main = (arr) => {
    const newArr = []
    for(i=arr.length -1; i >= 0; i--) {
        newArr.push(arr[i]) 
    }
    return newArr.join('')
}


// main(arr) //?




const factorial = (n) => {
    let sum = n;
    const factorial =  (n) => {
        if(n === 1) { 
            return sum
        }
        sum = sum * --n
        factorial(n) 
    }
    factorial(n)
    return sum
} 


// factorial(10) //?

// const even = (input) => {
//     input.array.forEach(element => {
        
//     });
// }

// even(2,'Hacker','Rank')

// even('2')

const dic = (args) => {
    const input = args.split("\n")
    const length = parseInt(input[0])+1
    const obj = {}
    for(let i=1; i<length; i++) {
        let half = input[i].split(' ')
        obj[half[0]] = half[[1]]
    }
    for(let i=length;i< input.length; i++) {
        if (obj[input[i]] !== undefined) {
            console.log(input[i]+ '=' +obj[input[i]])
        }
        else {
            console.log('Not Found')
        }
    }
}

dic(
'3' +'\n'+
'sam 99912222' +
'\n'+
'tom 11122222'+
'\n'+ 
'harry 12299933' +
'\n'+
'sam'+'\n'+ 
'edward'+'\n'+ 
'harry'
)

