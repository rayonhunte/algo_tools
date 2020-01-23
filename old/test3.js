// build a function that counts lower case chars in a string


countChar = (someString) => {
    someString
    someObj =  {}
   someString.toLowerCase().replace(/[^a-zA-Z0-9+]/g, "").split("").forEach(
       (char) => {
           char
           if (someObj[char]) {
            someObj[char]++
            someObj
           } else {
               someObj[char] = 1
               someObj
           }
       }
   )
       someObj
}


countChar('i like Cool cakes')

//  reverse strings