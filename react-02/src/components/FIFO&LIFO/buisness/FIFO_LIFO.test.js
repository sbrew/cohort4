import QS from './FIFO_LIFO'

test('does the queue work', () => {
let queue = new QS.Queue()
queue.putIn('Steve')
queue.putIn('Luc')
console.log(queue.items)
expect(queue.items[0].name).toBe('Steve')
expect(queue.newItem.name).toBe('Luc')
expect(queue.takeOut().name).toBe( 'Steve')
expect(queue.newItem.name).toBe('Luc')
expect(queue.takeOut().name).toBe( 'Luc')
expect(queue.takeOut()).toBe()
expect(queue.newItem).toBeNull()
});

test('does the stack work', () => {
    let stack = new QS.Stack()
    stack.putIn('Steve')
    stack.putIn('Luc')
    console.log(stack.items)
    expect(stack.items[0].name).toBe('Steve')
    expect(stack.newItem.name).toBe('Luc')
    expect(stack.takeOut().name).toBe( 'Luc')
    expect(stack.newItem.name).toBe('Steve')
    expect(stack.takeOut().name).toBe( 'Steve')
    expect(stack.takeOut()).toBe()
    expect(stack.newItem).toBe('Nothing Left')
    });