import React, { Suspense } from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import LinkedListDisplay from './LinkedListDisplayComp';
import linkedLists from './buisness/index';

test('test the basic linkedlist display  interface', () => {
    const mockPreviousClickCallback = jest.fn();
    const mockNextClickCallback = jest.fn();
    const mockDeleteClickCallback = jest.fn();
  
    //test data
    let linkedList = new linkedLists.LinkedList()
    linkedList.insertAtNext(1,1)

    render(<LinkedListDisplay
        linkedList={linkedList}
        nextNodeSelector={mockNextClickCallback}
        prevNodeSelector={mockPreviousClickCallback}
        deleteCurrentNode={mockDeleteClickCallback}
         />);

    screen.getByText(/list display/i);

    expect(mockNextClickCallback.mock.calls.length).toBe(0);
    click('Next Node');
    expect(mockNextClickCallback.mock.calls.length).toBe(1);

    expect(mockPreviousClickCallback.mock.calls.length).toBe(0);
    click('Previous Node');
    expect(mockPreviousClickCallback.mock.calls.length).toBe(1);

    expect(mockDeleteClickCallback.mock.calls.length).toBe(0);
    click('Delete Node');
    expect(mockDeleteClickCallback.mock.calls.length).toBe(1);
});


function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}