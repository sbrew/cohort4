import linkListStuff from './index'


test('test the Node constructor', () => {
    const newNode = new linkListStuff.ListNode(1, 1);
    expect(newNode).toEqual({ subject: 1, amount: 1, forwardNode: null, priorNode: null });
    expect(newNode.show()).toEqual("Subject 1 Amount 1");
});

test('does it insert a list item in the next node', () => {
    const ll = new linkListStuff.LinkedList();
    ll.insertAt(3, 3);
    expect(ll.size).toBe(1);
    expect(ll.currentNode.show()).toEqual("Subject 3 Amount 3");
    ll.insertAt(2, 2);
    expect(ll.size).toBe(2);
    expect(ll.currentNode.show()).toEqual("Subject 2 Amount 2");
    expect(ll.tail.show()).toEqual("Subject 3 Amount 3");
    expect(ll.head.show()).toEqual("Subject 2 Amount 2");
    ll.movingForward();
    ll.insertAt(1, 1);
    expect(ll.size).toBe(3);
    expect(ll.currentNode.show()).toEqual("Subject 1 Amount 1");
    expect(ll.tail.show()).toEqual("Subject 1 Amount 1");
    ll.goToHeadNode();
    ll.movingForward();
    expect(ll.currentNode.show()).toEqual("Subject 3 Amount 3");
    ll.insertAt(4, 4);
    expect(ll.size).toBe(4);
    expect(ll.currentNode.show()).toEqual("Subject 4 Amount 4");
    expect(ll.currentNode.priorNode.show()).toEqual("Subject 3 Amount 3");
    expect(ll.tail.show()).toEqual("Subject 1 Amount 1");
    expect(ll.head.show()).toEqual("Subject 2 Amount 2");
});

test('does the get  function work', () => {
    const ll = new linkListStuff.LinkedList();
    ll.insertAt(1, 1);
    expect(ll.get()).toEqual({ subject: 1, amount: 1, forwardNode: null, priorNode: null })
});

test('do the navigators work', () => {
    const ll = new linkListStuff.LinkedList();
    ll.insertAt(3, 3);
    ll.insertAt(2, 2);
    ll.insertAt(1, 1);
    ll.goToTailNode();
    expect(ll.currentNode.show()).toEqual("Subject 3 Amount 3");
    ll.goToHeadNode();
    expect(ll.currentNode.show()).toEqual("Subject 1 Amount 1");
    ll.goToTailNode();
    ll.movingForward();
    expect(ll.currentNode.show()).toEqual("Subject 3 Amount 3");
    ll.goToHeadNode();
    expect(ll.currentNode.show()).toEqual("Subject 1 Amount 1");
    ll.movingForward();
    expect(ll.currentNode.show()).toEqual("Subject 2 Amount 2");
    ll.movingForward();
    expect(ll.currentNode.show()).toEqual("Subject 3 Amount 3");
    ll.movingBackward()
    expect(ll.currentNode.show()).toEqual("Subject 2 Amount 2");
    console.log(ll)
});

test('does it delete the listnode', () => {
    const ll = new linkListStuff.LinkedList();
    ll.removeCurrent;
    expect(ll).toEqual({ "currentNode": null, "head": null, "size": 0, "tail": null });
    ll.insertAt(3, 3);
    ll.removeCurrent();
    expect(ll.head).toEqual(null);
    ll.insertAt(3, 3);
    ll.insertAt(2, 2);
    ll.removeCurrent();
    expect(ll.size).toBe(1);
    expect(ll.head.show()).toEqual("Subject 3 Amount 3");
    ll.insertAt(1, 1);
    ll.movingForward();
    expect(ll.size).toBe(2);
    expect(ll.tail.show()).toEqual("Subject 3 Amount 3");
    ll.removeCurrent();
    expect(ll.size).toBe(1);
    expect(ll.tail.show()).toEqual("Subject 1 Amount 1");
    ll.insertAt(3, 3);
    ll.insertAt(4, 4);
    expect(ll.size).toBe(3);
    ll.movingForward();
    expect(ll.currentNode.show()).toEqual("Subject 3 Amount 3");
    ll.removeCurrent();
    expect(ll.size).toBe(2);
    expect(ll.currentNode.show()).toEqual("Subject 4 Amount 4");
    expect(ll.head.show()).toEqual("Subject 4 Amount 4");
    expect(ll.tail.show()).toEqual("Subject 1 Amount 1");
});

test('does it return the total of all amounts', () =>{
    const ll = new linkListStuff.LinkedList();
    ll.insertAt(3,3);
    ll.insertAt(2,2);
    ll.insertAt(1,1);
    expect(ll.totalFunction()).toBe(6);
});

// test('how are things being added', () => {
//     const ll = new linkListStuff.LinkedList();
//     ll.insertAt(1,1);
//     ll.insertAt(2,2);
//     ll.insertAt(3,3);
//     // console.log(ll)
// })

// test('what the hell is going on', ()=>{
//     const ll = new linkListStuff.LinkedList();
//     ll.insertAt(1,1);
//     ll.insertAt(2,2);
//     // console.log(ll)
// });










