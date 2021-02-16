// "" = ""  true
// does case matter yes



// const makeString = (inString) => {
//     const newString = []
//     let array = inString.split('')  //?
//     for(x in array) {
//         if(array[x] != '#') {newString.push(array[x])} else {newString.pop()}
//     }
//     return newString.join() //?
// }

//  const backspaceCompare = (stOne, stTwo) => {
//     const fixsOne = makeString(stOne);
//     const fixsTwo = makeString(stTwo);
//     if ( fixsOne.length === fixsTwo.length && fixsOne === fixsTwo) {
//        return true
//     } else {return false}
// }


//backspaceCompare(array, arrayTwo) //?




//const array = "j##xfix"
//const arrayTwo = "j##xfix"
// array = "ab#c"
// arrayTwo = "ad#c"
// array = "ab##"
//arrayTwo = "c#d#" 
// array = "xywrrmp"
// arrayTwo = "xywrrmu#p"
// array = "bxj##tw"
// arrayTwo = "bxo#j##tw"

array = '#j'
arrayTwo = '#j'


"bxo#j##tw"

const backspaceCompare = (s1, s2) => {
    const a1 = s1.split('') //?
    const a2 = s2.split('') //?
    let match = true
    right = 0
    for(i = a1.length -1; i >= 0; i--) {
       
    }
    return match
}
backspaceCompare(array, arrayTwo) //?