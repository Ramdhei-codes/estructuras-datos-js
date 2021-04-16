const HashTable = require('./HashTable');

const myHashTable = new HashTable(50)

myHashTable.set("Ramdhei", 2002);
myHashTable.set("Tatiana", 1997);
myHashTable.set("Julián", 2001);

// console.log(myHashTable.delete("Julián"));

console.log(myHashTable.getAllKeys());


console.log(myHashTable.data)