// "" = ""  true
// does case matter yes


// const array = "j##xfix"
// const arrayTwo = "j##xfix"

array = "ab#c"
arrayTwo = "ad#c"


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


const backspaceCompare = (s1, s2) => {
    const a1 = s1.split('') //?
    const a2 = s2.split('') //?    
    let p2 = a2.length -1
    let match = true
    for(i = a1.length-1; i >= 0; --i) {
        let p1 = a1[i]
        p1 
        if(p1 === '#') {
            i = i -1
            if(a2[p2] === '#') { p2 = p2 -1}
        } else {
            if(a2[p2] === '#') {
                p2--
            } else if(p1 !== a2[p2]) {
                p1 
                a2[p2] //?
                match = false
            } else {
                p1
                a2[p2] //?
                p2--
            }
        }
    }
    return match //?
}


backspaceCompare(array, arrayTwo)