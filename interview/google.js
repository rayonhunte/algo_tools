// find the first reoccurrence 
const array =[2,5,5,1,2,3,5,1,2,4]

const firstToTwo = (array) => {
    const hashTable = {}
    for(let i =0; i< array.length; i++) { 
        if(hashTable[array[i]]) {
            hashTable[array[i]][0]++
            // return array[i] 
        } else {
            hashTable[array[i]] = [1, i]
        }
    }
     
    
    let length = array.length;
    for (j in hashTable) {
        if (hashTable[j][0] > 1) {
            if(hashTable[j][1] < length) {
                length = hashTable[j][1]
            }
         }
    }
    return array[length]
}

firstToTwo(array);

