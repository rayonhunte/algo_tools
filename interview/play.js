// const a1 = ['a','b','n']
// const a2 = ['f', 'y', 'b']



// const common = (a1, a2) => { 
//     if (a1.length < 1 || a2.length < 1) return false
//     const a1Obj = {}
//     let status = false
    
//     for(i in a1) {
//         a1Obj[a1[i]] = a1[i]
//     }
   
//     a2.forEach(e => {
//        if(e in a1Obj) {
//         status = true
//        }
//    });

//    return status
// }


// common(a1, a2) //?

const obj = {   
        value: 5,
        next: {
            value: 4,
            next: null,
            back: null
        }
}

const obj2 = {   
    value: 5,
    next: {
        value: 4,
        next: {
            value: 3,
            next:null
        },
        back: {
            value: 5
        }
    }
}

