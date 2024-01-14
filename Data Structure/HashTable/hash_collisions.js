let user = {
    age : 54,
    name : 'Kylie',
    magic : true,
    scream : function() {
        console.log('ahhhhhhh!');
    }
}

user.age // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream(); // O(1)

// Hash Collision
// A hash function is used to map the search key to the index of this array element.
// The element is then stored at that position.

// Now suppose we want to store an element whose key is 21.
// We pass 21 to the hash function and it returns 1.
// We store the element at position 1.
// Now again we want to store an element whose key is 21.
// We pass 21 to the hash function and it again returns 1.
// We try to store it at position 1 but we find that it is already occupied,
// this is what is called collision.
// There are many techniques to resolve this collision.
// One of the technique is chaining.
// In chaining we use linked list at each index of the array.

