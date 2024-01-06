class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length
        }
        return hash;
    }

    set(key, value){
        let address = this._hash(key); // O(1) get the address
        if(!this.data[address]){ // O(1) check if the address is empty
            this.data[address] = []; // O(1) create an empty array
        }
        this.data[address].push([key,value]); // O(1) push the key and value to the array
        return this.data; // O(1) return the data
    }

    get(key){
        let address = this._hash(key); // O(1) get the address
        const currentBucket = this.data[address]; // O(1) get the current bucket
        if(currentBucket){ // O(1) check if the current bucket is not empty
            for(let i = 0; i < currentBucket.length; i++){ // O(n) loop through the current bucket
                if(currentBucket[i][0] === key){ // O(1) check if the current key is equal to the key
                    return currentBucket[i][1] // O(1) return the value
                }
            }
        }
        return undefined; // O(1) return undefined
    
    }
}



const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
console.log(myHashTable);
console.log(myHashTable.get('grapes'));
console.log(myHashTable.set('grapess', 10000));
console.log(myHashTable.set('apples', 10000));

