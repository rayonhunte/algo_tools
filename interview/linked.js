// linked list
// 10 --> 5 --> 16

let myLink = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null
      }
    }
  }
};

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {value, next: null}
    this.tail.next = newNode
    this.tail = newNode
    this.length += 1;
    return this;
  }
  prepend(value) {
    const newNode = {value, next: null}
    newNode.next = this.head
    this.head = newNode
    this.length +=1
    return this
  }
  insert(index, value) {
      const newNode = {value, next: null}
      let stop = this.head
      let count = 0
      while (stop) {
          if(count === index) { break}
          stop = stop.next
          count++ //? 
      }
      let pointHolder = stop.next 
      stop.next = newNode
      newNode.next = pointHolder
      this.length += 1
      return this;
  }

  remove(index) {
        let count = 0;
        let lead = this.head 
        while (count !== index -1) {
            lead = lead.next            
            count++
        }   
        const unwanted = lead.next
        lead.next = unwanted.next
        this.length --
    
  }

  print() {
    let stop = this.head
    const array = []
    while(stop){
        //array.push({value:stop.value, obj: stop.next})
        array.push(stop.value)
        stop = stop.next
    }
    return array
  }
}

const newLinkedList = new LinkedList(10);

newLinkedList.append(5);
newLinkedList.append(6);
newLinkedList.append(7)
newLinkedList.prepend(8)
newLinkedList.prepend(9)
newLinkedList.insert(1, 11)
newLinkedList.remove(2)
newLinkedList.print() //?
console.log(newLinkedList);
