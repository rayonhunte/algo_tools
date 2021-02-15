// "" = ""  true
// does case matter yes


//const array = "j##xfix"
//const arrayTwo = "j##xfix"

//array = "ab#c"
//arrayTwo = "ad#c"

array = "ab##"
arrayTwo = "c#d#"
 
// array = "xywrrmp"
// arrayTwo = "xywrrmu#p"


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
    remove = 0
    move = a2.length -1
    let match = true
    for(i = a1.length -1; i >= 0; i--) {
       if(a1[i] === '#') { remove ++} 
       else {   
           i = i
           if (a2[move] === '#') {
               i = i + 1;  
               move = move - 2
            } else {
             a1[i] //?
             a2[move] //?
            if(a1[i] !== a2[move]) {match = false} else {move = move -1}  
           }
       } 

    }
    remove
    return match
}


backspaceCompare(array, arrayTwo) //?