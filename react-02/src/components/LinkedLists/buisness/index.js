class ListNode {
    constructor(subject, amount, forwardNode = null, priorNode = null) {
        this.subject = subject;
        this.amount = Number(amount);
        this.forwardNode = forwardNode;
        this.priorNode = priorNode;
    }

    show() {
        return `Subject ${this.subject} Amount ${this.amount}`;
    }
}

class LinkedList {
    constructor() {
        this.head = null; //pointer to top
        this.tail = null; //pointer to previous
        this.currentNode = null; //current position 
        this.size = 0; //length
    }

    get() {
        return this.currentNode
    }

    goToHeadNode() {
        this.currentNode = this.head;
    }

    goToTailNode() {
        this.currentNode = this.tail;
    }

    movingForward() {
        if(this.currentNode=== null){
            this.currentNode=this.head;
        }
       else if (this.currentNode.forwardNode!==null ){
            this.currentNode = this.currentNode.forwardNode
            return this.currentNode
        } return;

    }

    movingBackward() {
        if (this.currentNode.priorNode !==null){
            this.currentNode = this.currentNode.priorNode
            return this.currentNode
        }else this.currentNode=null;
        
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
        } else if (this.currentNode===null) {
            let newForward = this.head;
            this.currentNode = new ListNode(subject, amount);
            this.currentNode.forwardNode = newForward;
            newForward.priorNode = this.currentNode
            this.head = this.currentNode;

            //if replacing tail
        } else if (!this.currentNode.forwardNode) {
            current = this.currentNode
            this.tail = node;
            this.currentNode = node;
            this.currentNode.priorNode = current
            current.forwardNode = this.currentNode;

            //if adding in the middle
        } else {
            current = this.currentNode;
            let oldForward = current.forwardNode;
            this.currentNode = node;
            this.currentNode.priorNode = current;
            current.forwardNode = this.currentNode;
            this.currentNode.forwardNode = oldForward;
            oldForward.priorNode = this.currentNode
        }
        this.size++;
    }

    //remove at location
    removeCurrent() {
        let deletedNode = this.currentNode;
        if(!this.head){
            return;
        }
        //single list item
        else if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.currentNode = null;

            //deleting first node
        } else if (deletedNode === this.head) {
            this.head = this.head.forwardNode
            this.head.priorNode = null;
            this.currentNode = this.head;

            //deleting last node
        } else if (deletedNode === this.tail) {
            this.tail = this.tail.priorNode
            this.tail.forwardNode = null;
            this.currentNode = this.tail;

            // deleting middle node 
        } else {
            let startDeletion = deletedNode.priorNode;
            let endDeletion = deletedNode.forwardNode;
            this.currentNode = startDeletion;
            this.currentNode.forwardNode = endDeletion;
            endDeletion.priorNode = this.currentNode;
        }
        this.size--;
        
    }

    totalFunction() {
        let total = 0;
        let nodeTotals = this.head;
        while (nodeTotals) {
            total += nodeTotals.amount;
            nodeTotals = nodeTotals.forwardNode;
        }
        return total;
    }

}


export default { ListNode, LinkedList };