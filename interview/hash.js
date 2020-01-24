class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
    set(key, value) {
       let address = this._hash(key)
       if(!this.data[address]) {
        this.data[address] = []
       } 
        this.data[address].push([key, value])
    }

    get(key) {
     const address = this._hash(key)
      const bucket = this.data[address]
      if(bucket) {
        for(let i=0; i< bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1]
            }
        }
      }  
    }

    keys() {
        const shopList = []
        for(let i =0; i< this.data.length; i ++) {
            if(this.data[i]) {
                for(let j =0; j< this.data[i].length; j++) {
                    this.data[i][j][1] //?
                    shopList.push(this.data[i][j][0])
                }
            }
        }
        return shopList;
    }
}
  
const hash = new HashTable(20)

hash.set('grapes', 10000)
hash.set('apples', 10000)

hash.data //?
console.log(
    hash.get('apples')
)
console.log(
hash.keys() //?
)