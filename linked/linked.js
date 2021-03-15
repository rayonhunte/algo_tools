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
   let pre = null
   let current = list
   while (current) {
       let next = current.next
       next
       current.next = pre
       current
       pre = current
       pre
       current = next
       current 
   }

    pre //?
}


revList(list);
