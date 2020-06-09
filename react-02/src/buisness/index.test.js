import linkListStuff from './index'


test('test the Node constructor', () => {
    const newNode = new linkListStuff.ListNode(1,1);
    expect(newNode).toEqual({ subject: 1, amount: 1, forwardNode: null, priorNode: null });
    expect(newNode.show()).toEqual("1 & 1");
});

test('test inserting at the head of the LinkedList', () => {
    const ll = new linkListStuff.LinkedList();
    ll.insertFirst(1,1);
    expect(ll.size).toBe(1);
    expect(ll.head).toEqual({ subject: 1, amount: 1, forwardNode: null });
    expect(ll.tail).toEqual({ subject: 1, amount: 1, forwardNode: null });
    ll.insertFirst(2,2);
    expect(ll.size).toBe(2);
    expect(ll.head).toEqual({ subject: 2, amount: 2, forwardNode: { subject: 1, amount: 1, forwardNode: null } });
    expect(ll.tail).toEqual({ subject: 1, amount: 1, forwardNode: null });
    ll.insertFirst(3,3);
    expect(ll.size).toBe(3);
    expect(ll.head).toEqual({ subject: 3, amount: 3, forwardNode: { subject: 2, amount: 2, forwardNode: { subject: 1, amount: 1, forwardNode: null } } });
    expect(ll.tail).toEqual({ subject: 1, amount: 1, forwardNode: null });
    expect(ll.head.show()).toEqual("3 & 3");
    expect(ll.tail.show()).toEqual("1 & 1");
});

test('test inserting at tail location', () => {
    const ll = new linkListStuff.LinkedList();
    ll.insertLast(1,1);
    expect(ll.size).toBe(1);
    expect(ll.head).toEqual({ subject: 1, amount: 1, forwardNode: null });
    expect(ll.tail).toEqual({ subject: 1, amount: 1, forwardNode: null });
    ll.insertLast(2,2);
    expect(ll.size).toBe(2);
    expect(ll.tail).toEqual({ subject: 2, amount: 2, forwardNode: null });
    expect(ll.head).toEqual({subject: 1, amount: 1, forwardNode: { subject: 2, amount: 2, forwardNode: null } });
    ll.insertLast(3,3);
    expect(ll.tail).toEqual({ subject: 3, amount: 3, forwardNode: null });
    expect(ll.head).toEqual({ subject: 1, amount: 1, forwardNode: { subject: 2, amount: 2, forwardNode: { subject: 3, amount: 3, forwardNode: null } } });
});

test('does it insert a list item in the next node', () => {
    const ll = new linkListStuff.LinkedList();
    ll.insertFirst(1,1);
    ll.insertLast(2,2);
    ll.goToHeadNode();
    expect(ll.currentNode.show()).toEqual("1 & 1");
    ll.insertAtNext(3,3);
    ll.movingForward();
    expect(ll.currentNode.show()).toEqual("2 & 2");
    ll.insertAtNext(4,4)
    ll.goToHeadNode();
    ll.movingForward();
    ll.movingForward();
    console.log(ll); 
    
});











