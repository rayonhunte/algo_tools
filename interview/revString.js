const someString = "rayon hunte";

// first try
const someFunction = (someString) => {
    let stringArray = someString.split("");
    
    let newArray = []

    length=stringArray.length;

    for(i=0; i < length; i++) { 
        newArray.push(stringArray.pop())
    }
    
    console.log(newArray)
    return newArray.join('')
}
console.log(
    someFunction(someString)
)

// second try
const revString = (someString) => {
   const back = []
   let length = someString.length -1 //?
   length //?

   for(let i=length; i >= 0; i--) {
        back.push(someString[i])   
   }
   return back.join('') 
}


revString(someString) //?




