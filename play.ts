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


maxDigit(10) //?
maxDigit(549) //?
maxDigit(1) //?