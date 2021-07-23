"use strict"
// save for later
// return after 
function removeAllBefore(values: number[], b: number): number[] {
    // your code here
   let index = values.indexOf(b)
   return index < 0 ? values: values.slice(index)
}

// console.log('Example:');
// console.log(removeAllBefore([1, 1, 2, 2, 3, 3], 2));
// removeAllBefore([1, 1, 2, 4, 2, 3, 4], 2) //?
// removeAllBefore([1, 1, 5, 6, 7], 2) //?




function isAllUpper(text: string): boolean {
    // your code here
    if(text.length===0) return true
    let status = false;
    for(let v of text) {
        v === v.toUpperCase()? status = true : status = false
    }
    return status
}

isAllUpper('ALL UPPER')//?
isAllUpper('all lower') //?
isAllUpper('mixed UPPER and lower') //?
isAllUpper('') //?



function replaceFirst(values: number[]): number[] {
    // your code here
    if(values.length <= 1) return values
    const a = values.splice(0,1)
    values.push(a[0])
    return values;
}

// These "asserts" are used for self-checking
replaceFirst([1, 2, 3, 4]) //?
replaceFirst([1]) //?
replaceFirst([]) //?


// mu solution
function maxDigit(value: number): number {
    // your code here
    if (value.toString().length === 1 ) return value
    let max = 0;
    for(let v of value.toString()) {
        let vInt = parseInt(v)
        vInt > max? max = vInt : max 
    }
    return max;
}


function maxDigitBest(value: number): number {
    return Math.max(...[...value.toString()].map(Number))
}


//maxDigit(10) //?
//maxDigit(549) //?
//maxDigit(1) //?


function nearestValue(values: number[], search: number) {
    if(values.length < 1) return 0
    let data = []
    let less = 0
    for (let i = 0; i < values.length; i++) {
        // check if data has values
        if(data[0]) {
            values[i] < search? less = search - values[i] : less = values[i] - search  
            if(less < data[1]) {
                data[0] = values[i]
                data[1] = less
            } else if(less === data[1]) {
                values[i] < data[0]? data[0] = values[i] : null 
            } 
        } else {
            data[0] = values[i]
            search < values[i]? data[1] = values[i] - search : data[1] = search - values[i] 
        }     
    } 
    return data[0]       
}

// nearestValue([4, 7, 10, 11, 12, 17], 9) //?
// nearestValue([4, 7, 10, 11, 12, 17], 8) //?
// nearestValue([4, 8, 10, 11, 12, 17], 9) //?
// nearestValue([4, 9, 10, 11, 12, 17], 9) //?
// nearestValue([4, 7, 10, 11, 12, 17], 0) //?
// nearestValue([4, 7, 10, 11, 12, 17], 100) //?
// nearestValue([5, 10, 8, 12, 89, 100], 7 ) //?


const betweenMarkers = (str: string, l: string, r: string) => {
    let points = [] 
    for (let i = 0; i < str.length; i++) {
        if(l === str[i]) points[0] = i
        if(r === str[i]) points[1] = i 
    }
   return str.slice(points[0]+1, points[1]) //?
}



// betweenMarkers('What is >apple<', '>', '<') //? 
// betweenMarkers('What is [apple]', '[', ']') //?
// betweenMarkers('What is ><', '>', '<')  //?
// betweenMarkers('[an apple]', '[', ']') //?

function correctSentence(str: string): string {
    if(str.length< 1) return ''
    if(str[0].toUpperCase() !== str[0]) str = str[0].toUpperCase() + str.slice(1) 
    if(str[str.length-1] !== '.') str = str + '.'
    return str //?
}


// correctSentence("greetings, friends") //? 
// correctSentence("Greetings, friends") //?
// correctSentence("Greetings, friends.") //?

function isEven(num: number): boolean {
    return num % 2 == 0? true : false 
}


// isEven(2) //?
// isEven(5) //?
// isEven(0) //?

function reverse(x: number): any {
    const bol = x < 0;
    let newNum = parseInt(x.toString().split("").reverse().join(""))
    if (bol && newNum > Math.pow(2, 31)) return 0
    if (!bol && newNum > Math.pow(2, 31) -1) return 0
    return bol ?  -newNum : newNum 
};


reverse(-123) //?
reverse(1534236469) //?
// reverse(0) //?


