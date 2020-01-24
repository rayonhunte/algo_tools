const array =[3,2,5,1,2,3,5,1,2,4]

const firstToTwo = (array) => {
    const hashTable = {}
    for(let i =0; i< array.length; i++) { 
        if(array[i] in hashTable) {
            hashTable[array[i]][0]++ 
        } else {
            hashTable[array[i]] = [1, i]
        }
    }

    hashTable
    
    let length = array.length;
    for (j in hashTable) {
        if (hashTable[j][0] > 1) {
            if(hashTable[j][1] < length) {
                length = hashTable[j][1]
            }
         }
    }
    array[length] //?
}


firstToTwo(array);

