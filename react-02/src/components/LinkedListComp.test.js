import LinkedListNode from './LinkedListComp'
jest.mock('./LinkedListComp')

beforeEach(() => {
    LinkedListNode.mockClear();
});

test('test the LinkedListNode', () => {
    const mockFn = jest.fn();
    const head = new LinkedListNode(123);

    mockFn.mock.instances[0] === head;
    expect(head).toHaveBeenCalled();
});