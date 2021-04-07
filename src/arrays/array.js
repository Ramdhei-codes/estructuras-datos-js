class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.data
    }

    pop() {
        const lastElement = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastElement
    }

    delete(index) {
        const item = this.data[index]
        this.shiftIndex(index)

        return item
    }

    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }

        delete this.data[this.length - 1]
        this.length--
    }

    unshift(element) {
        this.length++
        for(let i = this.length - 1; i >= 0; i--) {
            this.data[i] = this.data[i - 1]
        }

        this.data[0] = element

        return element
    }
}

module.exports = MyArray
