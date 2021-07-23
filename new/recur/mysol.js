function power(exp, base) {
    if(base === 0) return 1
    if(exp -1 > 0) {
        base = base * base
        exp--
        power(exp, base)
    } return base
}

power(2,0) //?
power(2,2) //?
power(2,4) //?


function factorial(f) {
    if(f < 2) return 1
    let sum = 0
    function help(f) {
        if(f > 1) {
            let n = f - 1
            f
            sum = sum === 0? (f * n) : (sum * n)
            sum
            help(n)
        }
    }
    help(f)
   return sum
}



factorial(1) //?
// 1
factorial(2) //?
// 2
// factorial(4) //?
// 24
factorial(7) //?
// 5040

// function productOfArray(arr) {
//     if(arr.length  === 0) return 0
//     let sum = 1
    
//     function help(arr) {
//         if(arr.length > 0) {
//             sum  = sum * arr[0]
//             help(arr.splice(1))
//         }   
//     }
//     help(arr)
//     return sum
// }

function productOfArray(arr) {
    if(arr.length === 0) return 1
    return arr[0] * productOfArray(arr.slice(1))
}

//productOfArray([]) //?
//productOfArray([1]) //?
productOfArray([1,2,3]) //?
//productOfArray([1,2,3,10]) //?

function recursiveRange(num) {
 if(num  === 0) return 0
 return num + recursiveRange(num -1)
}

//recursiveRange(6) //? 
//recursiveRange(10) //?


function fib(n){
    if(n <= 2) return 1
    return fib(n -1) + fib(n-2)
}

//fib(4) //?
//fib(10) //?
//fib(28) //?
//fib(35) //?

function reverse(str){
    if(str.length === 1) return str
    return str[str.length-1] + reverse(str.slice(0, -1))  
}

// reverse('awesome') //?
// reverse('rithmschool') //?


function isPalindrome(str) {
    if (str.length <= 1) return true
    if(str[0] === str[str.length -1]) {
        let newStr = str.slice(1)
        newStr = newStr.slice(0, -1)
        isPalindrome(newStr)
    } else {
        return false
    }
   return true
}

// isPalindrome('awesome') //?
// isPalindrome('foobar') //? 
// isPalindrome('tacocat') //?
// isPalindrome('amanaplanacanalpanama') //?
// isPalindrome('amanaplanacanalpandemonium') //?


const isOdd = val => val % 2 !== 0;

function someRecursive(arr, callBack) {
    if(arr.length < 1) return false;
    if(callBack(arr[0]) === true) return true
    let newArr = arr.slice(1)
    return someRecursive(newArr, callBack)
}

// someRecursive([1,2,3,4], isOdd) //?
// someRecursive([4,6,8,9], isOdd) // ?
// someRecursive([4,6,8], isOdd) //?
// someRecursive([4,6,8], val => val > 10); //?

function flatten (arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        Array.isArray(arr[i])? newArr = newArr.concat(flatten(arr[i])) : newArr.push(arr[i])
    }
    return newArr
}


flatten([1, 2, 3, [4, 5] ]) //?
// flatten([1, [2, [3, 4], [[5]]]]) //?
// flatten([[1],[2],[3]]) //?
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) //?