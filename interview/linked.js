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
          if(count === index) {  
            console.log("i break")
            break
          }
          stop = stop.next
          count++ //? 
      }
      stop
      newNode.next = stop.next
      stop.next = newNode
      this.length += 1
      return this;
  }

  print() {
    let stop = this.head
    const array = []
    while(stop){
        array.push({value:stop.value, obj: stop.next})
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
newLinkedList.insert(0, 11)
newLinkedList.print() //?
console.log(newLinkedList);
