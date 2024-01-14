// Hash Table in Other Languages

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

Map() // ES6
Set() // ES6

const a = new Map();
// a.set('age', 54); 
// a.set('age', 54); // O(1)
// a.get('age'); // O(1)
// a.size; // O(1)
// a.delete('age'); // O(1)
// a.has('age'); // O(1)

const b = new Set();
// b.add(1); // O(1)
// b.add(1); // O(1)
// b.add(2); // O(1)
// b.size; // O(1)
// b.delete(1); // O(1)

// Map and Set are ordered
// Map and Set are iterable
// Map and Set are performant
// Map and Set are used for key-value pairs
// Map and Set are used for uniqueness
// Map and Set are used for lookups
// Map and Set are used for insertion

