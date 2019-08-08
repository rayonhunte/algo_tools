// longest word
// my way
const longWord = (wordString) => {
    let maxNum = 0;
    maxArray= [];
    const wordArray = wordString.toLowerCase().match(/[a-z0-9]+/g)
    wordArray.forEach(word => {
        if (word.length > maxNum) maxNum = word.length; 
    });
    wordArray.forEach(
        (word) => {
            if(word.length === maxNum) maxArray.push(word)
        }
    )
    return maxArray
}
longWord('some cool stuff in here') // ?

// way that works
const longWord2 = (wordString) => {
    if(!wordString) return;
    let wordArray = wordString.toLowerCase().match(/[a-z0-9]+/g).sort(
        (a,b) => b.length - a.length
    ) //?
    return wordArray.filter(word => word.length === wordArray[0].length) //?

}

longWord2('some other work rayon hunte')

// chunk array
const arrayChunk = (array, chunk) => {
   const chunkedArr = [];
   let i = 0; 
   while (i< array.length) {
       chunkedArr.push(
           array.slice(i, i+chunk)
       )
       i +=chunk
   }
   return chunkedArr //?
} 

arrayChunk([1,2,3,4,5,6,7,8,9], 2)


// flatten arrays
const flatArray = (array) => {
    //solution 1
    // return array.reduce(
    //     (a,b) => a.concat(b)
    // )
    
    //solution 2
    // return [].concat.apply([], array)
    return [].concat(...array)    
}

flatArray([
    [1,2,3],[4,5,6]
]) //?

// anagram
const helpAnny = (str) =>  {
    return str.replace(/[^\w]/g,'')
    .toLowerCase()
    .split('')
    .sort()
    .join("")
}

const annyGram = (word1, word2) => {
    let clean1 = helpAnny(word1) //?
    let clean2 = helpAnny(word2) //?
    if (clean1 === clean2) return true
    else return false
}

annyGram('elbow x c', 'below x c x') //?

const letterChange = (str) => {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, (char)=> {
        if(char === 'z') {
            return 'a'
        } else {
            return String.fromCharCode(char.charCodeAt()+1)
        }
    });
    newStr = newStr.replace(/a|e|i|o|u/gi, (v) => v.toUpperCase());
    return newStr //?
}

letterChange('Hello There')



const ones = (n) => {
    let sumOne = 0;
    let initN = n
    let lastMax = 0;
    let sumMax = 1;
    const helper= (initN) => {
        if(initN > sumMax) {
            lastMax = sumMax
            sumMax = sumMax * 2
            helper(initN)
        } else {
            sumOne += 1 //?
            initN = initN - lastMax; //?
            sumMax = 1 
        }
    }
    helper(initN)
    return sumOne;
}

ones(112) //?