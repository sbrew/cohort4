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
        this.currentNode = this.head.priorNode;
    }

    goToTailNode() {
        this.currentNode = this.tail;
    }

    movingForward() {
        if (this.currentNode.forwardNode)
            this.currentNode = this.currentNode.forwardNode
    }

    movingBackward(){
        if(this.currentNode.priorNode)
        this.currentNode = this.currentNode.priorNode;
    }

    //insert at location
    insertAtNext(subject, amount) {
        let node = new ListNode(subject, amount);
        let current;
        //if the list is empty
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.currentNode = node;
        //if replacing first item in list
        }else if (!this.currentNode) {
            let newForward = this.head;
            this.currentNode = new ListNode(subject, amount);
            this.currentNode.forwardNode = newForward;
            newForward.priorNode = this.currentNode
            this.head=this.currentNode;
        //if replacing tail
        } else if (!this.currentNode.forwardNode) {
            current = this.currentNode
            this.tail = node;
            this.currentNode=node;
            this.currentNode.priorNode=current
            current.forwardNode= this.currentNode;
        //if adding in the middle
        }else{
            current=this.currentNode;
            let oldForward = current.forwardNode;
            this.currentNode=node;
            this.currentNode.priorNode=current;
            current.forwardNode=this.currentNode;
            this.currentNode.forwardNode=oldForward;
            oldForward.priorNode=this.currentNode
        }
        this.size++;
    }
    //remove at location
    removeCurrent() {

    }

}


export default { ListNode, LinkedList };