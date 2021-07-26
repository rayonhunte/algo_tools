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

function capitalizeFirst (arr) {
    //return capitalizeFirst(arr.slice(1))
    let newArray = []
    function help(arr) {
        arr.length //?
        if(arr.length > 0){
            let newString = arr[0][0].toUpperCase() + arr[0].substring(1)
            newArray.push(newString)
            help(arr.slice(1))
        }
        return newArray
    }
       return  help(arr)
}

function capitalizeWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
  }

  function capitalizeFirst (array) {
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
  }
  
  // capitalizeFirst(['car','taco','banana']); //?

function nestedEvenSum (obj) {
    if(Object.keys(obj).length < 1) return 0
    let sum = 0;
    for(let o in obj) {
        typeof obj[o] === 'object' ? sum += nestedEvenSum(obj[o]) : sum += obj[o] % 2 === 0? obj[o] : 0
    }
    return sum //?
}
var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }

var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };

  // nestedEvenSum(obj1) //?
  // nestedEvenSum(obj2) //?


let obj4 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


function stringifyNumbers(obj) {
    newObj = {}
    for(let s in obj) {
        if(typeof obj[s]=== 'number') {
            newObj[s] = obj[s].toString()
        }
        else if(typeof obj[s]=== 'object' && !Array.isArray(obj[s])) {
            newObj[s] = stringifyNumbers(obj[s])
        } else {
            newObj[s] = obj[s]
        }

    }
    return newObj

}
// stringifyNumbers(obj4) //?
// stringifyNumbers(obj5) //?

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings(obj) {
    let newArr= []
    for(o in obj) {
       if(typeof  obj[o] === 'object') {
           return  newArr.concat( collectStrings(obj[o]))//?
       } else  {
            newArr = newArr.concat(obj[o])
       }
    }
    return newObj //?
}

collectStrings(obj) //?