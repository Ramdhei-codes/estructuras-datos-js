class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;

        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
    
        newNode.next = this.head;
        this.head = newNode;
    
        this.length++;
    
        return this;
      }

    insert(index, value) {
        const newNode = new Node(value);

        if (index >= this.length) {
            throw new Error('Out of bounds, sorry');
        }

        let currentNode = this.head;
        let previousNode;

        for (let i = 0; i < this.length; i++) {

            if(i === index) {
                newNode.next = currentNode;
                previousNode.next = newNode;
                break;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;

        }
        this.length++;
        return this;
    }

    remove(index) {
        if (index >= this.length) {
            throw new Error('Out of bounds, sorry');
        }

        if(index === 0) {
            const removedHead = this.head;
            this.head = this.head.next;
            return removedHead;
        }

        let currentNode = this.head;
        let previousNode;
        let removed;

        for (let i = 0; i < this.length; i++) {

            if(i === index) {
                removed = currentNode;
                previousNode.next = currentNode.next;
                return removed;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;

        }
        this.length--;
        return this;
    }

}

module.exports = {
    Node, SinglyLinkedList
}