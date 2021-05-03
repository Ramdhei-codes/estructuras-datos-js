class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
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
            }
            previousNode = currentNode;
            currentNode = currentNode.next;

        }
        this.length++;
        return this;
    }

}

module.exports = {
    Node, SinglyLinkedList
}