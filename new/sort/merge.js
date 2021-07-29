"use strict"
function merge(l, r) {
    let index = 0
    let m = []
    let length = (l.length >= r.length) ? l.length : r.length 
    while(index < length) {
       if(l[index] < r[index]) {
           m.push(l[index])
       } else {
            m.push(r[index])
       }
       index++
    }
    return m //?
}


let l = [1,10,24]
let r = [12,13,20]

console.log(merge(l,r)) //?