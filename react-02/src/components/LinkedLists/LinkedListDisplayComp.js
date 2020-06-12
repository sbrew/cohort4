import React from 'react';
import LinkedListNodeComp from './LinkedListNode'

function LinkedListDisplay({ linkedList, nextNodeSelector, prevNodeSelector, message, deleteCurrentNode, total }) {

    const nodeDisplay = [];
    let currentNode = linkedList.head;
    let keyCounter = 0;
    if (linkedList.size > 0) {
        while (currentNode) {
            nodeDisplay.push(<LinkedListNodeComp
                node={currentNode}
                key={keyCounter++}
            />);
            currentNode = currentNode.forwardNode;
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
                <h2>current Node: {message} </h2>
            </div>
            <div>
                <h3>Total: {total}</h3>
            </div>
        </div>
    );


}
export default LinkedListDisplay;