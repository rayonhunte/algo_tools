const list = {
    value: 1,
    next : {
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
    let next = null
    let pre = 'head' 
    let cur  = list
    count = 0
    while(count < 1) {
    if(pre === 'head'){
        next = cur.next
        next
        cur.next = null
        pre = next
        pre.next = cur 
        pre
        cur
     } else {

        
     }
     next
     count++
    }

    cur //?
}


revList(list);
