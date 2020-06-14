import React from 'react';
import LinkedListNodeComp from './LinkedListNode'

function LinkedListDisplay({ linkedList, nextNodeSelector, prevNodeSelector, current, deleteCurrentNode, total }) {

    const nodeDisplay = [];
    let currentN = linkedList.head;
    let keyCounter = 0;
    if (linkedList.size > 0) {
        while (currentN) {
            nodeDisplay.push(<LinkedListNodeComp
                node={currentN}
                key={keyCounter++}
            />);
            currentN = currentN.forwardNode;
        }
    }



    //display and navigate component
    return (
        <div className="LinkedListDisplay">

            <h1>List Display </h1>
            <div>
                {nodeDisplay}
            </div>
            <h1>List Navigations </h1>
            <button onClick={prevNodeSelector}>Previous Node</button>
            <button onClick={nextNodeSelector}>Next Node</button>
            <button onClick={deleteCurrentNode}>Delete Node</button>
            <div>
                <h2>current Node: {current} </h2>
            </div>
            <div>
                <h3>Total: {total}</h3>
            </div>
        </div>
    );


}
export default LinkedListDisplay;