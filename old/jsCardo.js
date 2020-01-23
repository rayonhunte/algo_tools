

rev = (someString) => {
    const arr = someString.split("")
    const newArr = []
    for(i=arr.length-1; i >= 0; i--) {
        i
        newArr.push(arr[i]) //?
    }
    return newArr
}

rev2 = (someString) => {
    let newStr = ''
    for(i=someString.length-1; i >= 0; i--) {
        newStr = newStr + someString[i] //?
    }
    return newStr
}



rev3 = (someString) => {
    let newString = ''
    for(letter in someString) {
        newString =  newString + someString[ (someString.length- 1 ) - letter]
    }
    return newString 
}


rev('ilikecool') //?
rev2('some like it hot') //?
rev3('cool') //?

// isPalindrome
const isPal = (str1, str2) => {
    newStr = ''
    str1.split("").forEach(
        (char,i) => {
            newStr = char + newStr //?
        } //? 
    )
    return newStr === str2
}
isPal('madam', 'madam') // ?

// revInt
revInt = (someNumber) => {
    let newNum = '';
    const numStr = (someNumber).toString();
    numStr.split("").forEach(
        (char) => {newNum = char + newNum}//?
    )
    return parseInt(newNum) * Math.sign(someNumber)
}

revInt(-512345) //?

// First letter Capital 
const fLetter = (someWords) => {
    words = someWords.split(" ")
    const theCapital = []
    for(i in words) {
        theCapital.push(
            words[i][0].toUpperCase() + words[i].substring(1) //?
        )
    }
    return theCapital.join(" ")
}

// using map
fLetterMap = (someWords) => {
    return someWords.toLowerCase().split(" ").map(
        (word) => {
            return word[0].toUpperCase() + word.substring(1);
        }
    ).join(" ")
} 


fLetter('i like some cake') //?
fLetterMap('i like some cake') //?



const maxMap = (someArray) => {
    let someObject = {}
    let max = 0;
    for(i=0 ;i<someArray.length; i++) {
        someObject[someArray[i]] = someObject[someArray[i]] ? someObject[someArray[i]] + 1: 1 
    }
    for(char in someObject) {
        if(someObject[char]> max) max = someObject[char]
    }
    return max //?
}

maxMap(['a','a','b','c','n','n','x','x','x','x']) //?


// fizZBuzz
const fizzBuzz = () => {
    for(i=0;i<=100; i++) {
        if (i % 3 === 0 && i % 5 === 0 ) {
            `fizBuzz ${i}` //?
        } else if (i % 5 === 0) {
            `Fizz ${i}` //?
        }
        else {
            i
        }
    }
}

fizzBuzz()
