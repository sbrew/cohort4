import React, { useState } from 'react';
import linkedLists from './buisness/index';
import LinkedListDisplay from './LinkedListDisplayComp'
import LinkedListInput from './LLInput'


const linkedList = new linkedLists.LinkedList();

function LinkedListApp() {

    let [message, setMessage] = useState('')
    let [currentNode, setCurrentNode] = useState('');
    let [total, setTotal] = useState(0);

    function createNewNode(subject, amount) {
        linkedList.insertAtNext(subject, amount);
        // setCurrentNode(linkedList.insertAtNext(subject, amount));
        setCurrentNode(linkedList.get());
        console.log(linkedList.currentNode)
        console.log(linkedList)
        console.log(currentNode)
        setMessage(linkedList.currentNode.show());
        amountTotals();
    };

    function nextNodeSelector() {
        setCurrentNode(linkedList.movingForward());
        console.log(linkedList.currentNode)
        console.log(linkedList)
        if (linkedList.currentNode != null)
            setMessage(linkedList.currentNode.show());

    }

    function prevNodeSelector() {
        if (linkedList.priorNode != null) {
            setCurrentNode(linkedList.movingBackward());
            console.log(linkedList.currentNode)
            setMessage(linkedList.currentNode.show());
        }
        return;

    }

    function deleteCurrentNode() {
        setCurrentNode(linkedList.removeCurrent())
        amountTotals();
        console.log(linkedList.currentNode)
        console.log(currentNode)
        if (linkedList.currentNode !== null) {
            // setCurrentNode(linkedList.currentNode);
            setMessage(linkedList.currentNode.show());
        } else
        setMessage('')
    }

    function amountTotals() {
        setTotal(linkedList.totalFunction());
    }

    return (

        <div className="LinkedListComp">

            <h1>Build some Linked list stuff here</h1>
            <LinkedListInput createNewNode={createNewNode} />
            <LinkedListDisplay
                linkedList={linkedList}
                message={message}
                nextNodeSelector={nextNodeSelector}
                prevNodeSelector={prevNodeSelector}
                deleteCurrentNode={deleteCurrentNode}
                total={total} />

        </div>

    );


}
export default LinkedListApp;