import linkListStuff from './index'


test('test the Node constructor', () => {
    const newNode = new linkListStuff.ListNode(1,1);
    expect(newNode).toEqual({ subject: 1, amount: 1, forwardNode: null, priorNode: null });
    expect(newNode.show()).toEqual("1 & 1");
});

test('does it insert a list item in the next node', () => {
    const ll = new linkListStuff.LinkedList();
    ll.insertAtNext(3,3);
    expect(ll.size).toBe(1);
    expect(ll.currentNode.show()).toEqual("3 & 3");
    ll.insertAtNext(2,2);
    expect(ll.size).toBe(2);
    expect(ll.currentNode.show()).toEqual("2 & 2");
    expect(ll.head.show()).toEqual("3 & 3");
    expect(ll.tail.show()).toEqual("2 & 2");
    ll.movingBackward();
    expect(ll.currentNode.show()).toEqual("3 & 3");
    ll.insertAtNext(1,1);
    expect(ll.size).toBe(3);
    expect(ll.currentNode.show()).toEqual("1 & 1");
    expect(ll.currentNode.priorNode.show()).toEqual("3 & 3");
    expect(ll.currentNode.forwardNode.show()).toEqual("2 & 2");
    ll.insertAtNext(4,4);
    expect(ll.size).toBe(4);
    expect(ll.currentNode.show()).toEqual("4 & 4");
    expect(ll.currentNode.priorNode.show()).toEqual("1 & 1");
    expect(ll.tail.show()).toEqual("2 & 2");
    expect(ll.head.show()).toEqual("3 & 3");   
    ll.goToHeadNode();
    expect(ll.currentNode).toEqual(null); 
    ll.insertAtNext(5,5);
    expect(ll.size).toBe(5);
    expect(ll.head.show()).toEqual("5 & 5");
    expect(ll.currentNode.forwardNode.show()).toEqual("3 & 3");   
});

test('does it delete the listnode', () => {
    const ll = new linkListStuff.LinkedList();
    ll.insertAtNext(3,3);
    ll.insertAtNext(2,2);
    ll.movingBackward();
    ll.removeCurrent();
    expect(ll.size).toBe(1);
    expect(ll.head.show()).toEqual("2 & 2");
    ll.insertAtNext(1,1);
    expect(ll.size).toBe(2);
    expect(ll.tail.show()).toEqual("1 & 1");
    ll.removeCurrent();
    expect(ll.size).toBe(1);
    expect(ll.tail.show()).toEqual("2 & 2");
    ll.insertAtNext(3,3);
    ll.insertAtNext(4,4);
    expect(ll.size).toBe(3);
    ll.movingBackward();
    expect(ll.currentNode.show()).toEqual("3 & 3");
    ll.removeCurrent();
    expect(ll.size).toBe(2);
    expect(ll.currentNode.show()).toEqual("2 & 2");
    expect(ll.head.show()).toEqual("2 & 2");
    expect(ll.tail.show()).toEqual("4 & 4");
});

test('does it return the total of all amounts', () =>{
    const ll = new linkListStuff.LinkedList();
    ll.insertAtNext(3,3);
    ll.insertAtNext(2,2);
    ll.insertAtNext(1,1);
    expect(ll.totalFunction()).toBe(6);
});











