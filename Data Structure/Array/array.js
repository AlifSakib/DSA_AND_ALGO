// Static array implementation
// Description: Array data structure implementation
// Author: AlifSakib

class Array {
    constructor() {
        this.data = {};
        this.length = 0;
    }
    
    // O(1)
    push(item) {
        this.data[this.length] = item;
        this.length++;
    }
    
    // O(1)
    pop() {
        const item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }
    
    // O(n)
    delete(index) {
        const item = this.data[index];
        this._shiftItems(index);
        return item;
    }
    
    // O(n)
    _shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
        }
    
        delete this.data[this.length - 1];
        this.length--;
    }
    }

    const array = new Array();
    array.push('hi');
    array.push('you');
    array.push('!');
    array.pop();

    console.log(array);
    array.delete(1);

// Dynamic array implementation
// Description: Dynamic array data structure implementation

class DynamicArray {
    constructor() {
        this.data = {};
        this.length = 0;
        this.capacity = 0;
    }
    
    // O(1)
    push(item) {
        if (this.length === this.capacity) {
        this._resize();
        }
    
        this.data[this.length] = item;
        this.length++;
    }
    
    // O(1)
    pop() {
        const item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }
    
    // O(n)
    delete(index) {
        const item = this.data[index];
        this._shiftItems(index);
        return item;
    }
    
    // O(n)
    _shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
        }
    
        delete this.data[this.length - 1];
        this.length--;
    }
    
    // O(n)
    _resize() {
        const newCapacity = this.capacity === 0 ? 1 : this.capacity * 2;
        const newData = new Array(newCapacity);
    
        for (let i = 0; i < this.length; i++) {
        newData[i] = this.data[i];
        }
    
        this.data = newData;
        this.capacity = newCapacity;
    }
    }

    const dynamicArray = new DynamicArray();
    dynamicArray.push('hi');
    dynamicArray.push('you');
    dynamicArray.push('!');
    dynamicArray.pop();

    console.log(dynamicArray);
    dynamicArray.delete(1);
    dynamicArray._resize();
    dynamicArray._shiftItems(1);


// Example 1:


    