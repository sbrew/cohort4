import React from 'react';
import {  render, screen } from '@testing-library/react';
import LinkedListNodeComp from './LinkedListNode';
import linkedLists from './buisness/index';

test('test the basic linkedlist display  interface', () => {
   
  
    //test data
    let linkedList = new linkedLists.LinkedList()
    linkedList.insertAtNext(1,1)

    render(<LinkedListNodeComp
        node={linkedList}
        // nextNodeSelector={mockNextClickCallback}
        // prevNodeSelector={mockPreviousClickCallback}
        // deleteCurrentNode={mockDeleteClickCallback}
         />);

    screen.getByText(/subject/i);

    
});
