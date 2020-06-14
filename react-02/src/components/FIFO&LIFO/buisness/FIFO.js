class Queue {
    constructor() {
        this.items = {}
        this.head = ''
        this.tail = ''
        this.lastKey = 1
        this.size = 0
    }

    nextKey() {
        return this.lastKey++;
    }

    enqueue(newObj) {
        newObj.key = this.nextKey();
        this.items[this.tail] = newObj;
        this.tail++;
        this.size++
    }
}

export default Queue;