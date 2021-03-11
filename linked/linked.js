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
    let curNode = list
    let nextValue = null
    while(curNode) {
        curNode.value //?
        if(!oldNode) {

        }
        curNode = curNode.next
        
    }
}


revList(list)