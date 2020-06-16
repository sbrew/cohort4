class Thing {
    constructor(name) {
        this.name = name;
        this.key = 0
    }
}

class Queue {
    constructor() {
        this.items = []
        this.lastKey = 1;
        this.newItem = null;
    }

    nextKey() {
        return this.lastKey++;
    }

    putIn(newObj) {
        this.newItem = new Thing(newObj)
        this.newItem.key = this.nextKey()
        this.items.push(this.newItem)
        return this.newItem;
    }

    takeOut() {
        let removed;
        if (this.items.length > 0)
            removed = this.items.shift();
        if (this.items.length === 0) {
            this.newItem = 'Nothing Left'
        }
        return removed;
    }
}

class Stack {
    constructor() {
        this.items = []
        this.lastKey = 1;
        this.newItem = null;
    }

    putIn(newObj) {
        this.newItem = new Thing(newObj)
        this.newItem.key = this.nextKey()
        this.items.push(this.newItem)
        return this.newItem;
    }

    nextKey() {
        return this.lastKey++;
    }

    takeOut() {
        let removed;
        if (this.items.length > 0) {
            removed = this.items.pop();
            if (this.items.length === 0) {
                this.newItem = 'Nothing Left';
            } else {
                this.newItem = this.items[this.items.length - 1]
            }
        }
        return removed;
    }


}



export default { Queue, Stack };