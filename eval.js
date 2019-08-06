const someSquar = (array) => {
    let max = 0
    for(i=0; i< array.length; i++){
        array[i] //?
        let count = -1
        for(j=0;j<array[i].length; j++) {
            array[i][0] //?
            if (array[i][j] === 1) {
                count++
            } //?
        }
        if (count > max) {
            max = count //?
        }
    }
}

someSquar(
    [
    [1,1,1],
    [0,0,0],
    [0,0,0],
    ]
    )