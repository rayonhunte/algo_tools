const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
        }
    }
} /*? $.next */


const revList = (list) => {
    let pre = null
    let current = list
    while (current) {
        let next = current.next
        current.next = pre
        pre = current
        current = next
    }

    return pre //?
}


// console.log(revList(list));

const m = 2
const n = 4
list //?
const reverseBetween = (list, m, n) => {
    let start = list
    let pre = null
    let tail = list

    while (tail) {  
        pre = tail
        tail =  tail.next
    }
    while (start) {
        if(start.value === m ) {
            current = start
            while(current) {
                let next = current.next
                if(current.value <= n) {
                    current.next = pre
                    pre = current
                    current = next
                } else {
                    current = next
                }
            }
            list.next = pre
            let sum = list 
            break
        } else {
            start = start.next
        }
    }
    return list //?
}


console.log(reverseBetween(list, m, n))

