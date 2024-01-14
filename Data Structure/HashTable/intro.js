// Hash Table
// A hash table is a data structure that is used to store keys/value pairs.
// It uses a hash function to compute an index into an array of buckets or slots,
// from which the desired value can be found.
// In other words, a hash table is a data structure that maps keys to values for highly efficient lookup.
// They are used to implement associative arrays, sets and caches.
// Hash tables are also used for database indexing, cryptography, etc.
// A hash table uses a hash function to compute an index into an array of buckets or slots,
// from which the desired value can be found.
// When collision occurs, the key is still unique, but the value is updated or overwritten.
// Hash tables are commonly used because they are very efficient for finding and retrieving data.
// Hash tables are used to implement many types of in-memory tables.
// They are used to implement associative arrays (arrays whose indices are arbitrary strings or other complicated objects),
// sets and caches, and also used for database indexing.
// Hash tables are also used in many search applications, where they are sometimes called hash files.
// For example, suppose we want to store 1 million phone numbers.
// It would be nice to be able to do fast searches on this huge list of phone numbers.
// We could use a hash table, where the keys are the phone numbers and the values are detailed records about each number.
// We could then use a hash function that converts a phone number into a small integer,
// say by adding all the digits together.

// Hashing
// Hashing is a technique used for storing , searching and removing elements in almost constant time.
// Hashing is done with help of a hash function that generates index for a given input,
// then this index can be used to search the elements, store an element,
// or remove that element from that index.
// A hash function is a function that is used to map the data elements to their position in the data structure used.
// For example if we use an array to store the integer elements then the hash function will generate position for each element so that searching,
// storing and removing operation on the array can be done in constant time that is independent of the number of elements in the array.
// For example if we want to store an integer element 235 then the hash function will generate an index position for 235 in the array and
// we can store the element 235 at that index position in the array.
// Now suppose that we want to search for the element 235 in the array then again we will use the same hash function to find the index position
// for the element 235 in the array and then we can search the element 235 at that index position in the array.

// Hash Function
// A hash function is any function that can be used to map data of arbitrary size to fixed-size values.
// The values returned by a hash function are called hash values, hash codes, digests, or simply hashes.
// The values are used to index a fixed-size table called a hash table.

