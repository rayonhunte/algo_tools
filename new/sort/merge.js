"use strict"
function merge(l, r) {
    // empty array
    let  m = []
    let pl = 0
    let pr = 0
    const length = l.length + r.length
    while(m.length < length){
        if(l[pl] < r[pr] || r[pr]=== undefined) {
            m.push(l[pl])
            pl++
        } else {
            m.push(r[pr])
            pr++
        }
    } 
    return m
}


let arr = [1,10,24,60,75]
// let r = [5,12,13,20,80,81]

// merge(l,r) //?

function sort(arr) {
    arr.length //?
    arr
    if(arr.length <= 1) return arr
    let m = Math.ceil( (arr.length) / 2)
    let l = sort(arr.slice(0, m))
    let r = sort(arr.slice(m))
    return merge(l, r)
}

sort(arr) //?

