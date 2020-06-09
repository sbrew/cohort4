class ListNode {
    constructor(subject, amount, forwardNode = null, priorNode = null) {
        this.subject = subject;
        this.amount = amount;
        this.forwardNode = forwardNode;
        this.priorNode = priorNode;
    }

    show() {
        return `${this.subject} & ${this.amount}`;
    }
}

class LinkedList {
    constructor() {
        this.head = null; //pointer to top
        this.tail = null; //pointer to previous
        this.currentNode = null; //current position 
        this.size = 0; //length
    }

    goToHeadNode() {
        this.currentNode = this.head;
    }

    goToTailNode() {
        this.currentNode = this.tail;
    }

    movingForward() {
        if (this.currentNode.forwardNode)
            this.currentNode = this.currentNode.forwardNode
    }

    insertFirst(subject, amount) {
        if (!this.head) {
            let node = new ListNode(subject, amount, this.head);
            this.head = node;
            this.tail = node;
            this.currentNode = node;
        } else {
            this.head = new ListNode(subject, amount, this.head);
            this.currentNode = this.head;
        }
        this.size++;
    }

    insertLast(subject, amount) {
        let node = new ListNode(subject, amount, null);
        let current;
        //if empty, make head
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.currentNode = node;
        } else {
            current = this.head;
            this.tail = new ListNode(subject, amount, null);
            this.currentNode = this.tail;

            while (current.forwardNode) {
                current = current.forwardNode;
            }
            current.forwardNode = node;
        }
        this.size++;
    }
    //insert at location
    insertAtNext(subject, amount) {
        let node = new ListNode(subject, amount, this.currentNode?.forwardNode);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.currentNode = node;
        } else {
            this.currentNode.forwardNode = node;
            this.currentNode = node;
            if (!this.currentNode.forwardNode)
                this.tail = node;
        }

        // //if index is out of range
        // if (index > 0 && index > this.size) {
        //     return;
        // }
        // //if first index
        // if (index === 0) {
        //     this.head = new ListNode(data, this.head);
        //     return;
        // }
        // const node = new ListNode(data);
        // let current, previous;
        // //set current to first
        // current = this.head;
        // let count = 0;

        // while (count < index) {
        //     previous = current; //node before index
        //     count++;
        //     current = current.next; // node after index
        // }
        // node.next = current;
        // previous.next = node;

        this.size++;
    }
    //remove at location

}


export default { ListNode, LinkedList };