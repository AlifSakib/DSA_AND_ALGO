// Author : AlifSakib

// 10 --> 5 --> 16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null,
//             }
//         }
//     }
// }


class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value : value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        // const newNode = {
        //     value: value,
        //     next: null,
        // }
        const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        // const newNode = {
        //     value : value,
        //     next: null,
        // }
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    
    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
        return array;
    }


    traverseToIndex(index){
        //check params
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }

        // const newNode = {
        //     value: value,
        //     next: null,
        // }

        const newNode = new Node(value)
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList()
    }

    remove(index){
        //check params
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList()
    }
    
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16)
myLinkedList.prepend(1);

console.log(myLinkedList.printList());
myLinkedList.insert(2, 99);
console.log(myLinkedList.printList());
myLinkedList.remove(2);
console.log(myLinkedList.printList());

