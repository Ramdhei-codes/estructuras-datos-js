const {Node, SinglyLinkedList} = require('./singly');

const myList = new SinglyLinkedList('Eduardo');

myList.append('Gerardo');
myList.append('Ramdhei');
myList.append('Juan'); 
myList.append('Guillermo');
myList.insert(1, 'Kevin');
myList.prepend(myList.remove(1).value);

console.log(myList.head);
