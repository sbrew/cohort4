import React, { useState } from 'react';
import linkedLists from './buisness/index';
import LinkedListDisplay from './LinkedListDisplayComp'
import LinkedListInput from './LLInput'

let lL = new linkedLists.LinkedList()

function LinkedListApp() {
    
    const [linkedList, setLinkedList] = useState(lL);
    let [current, setCurrent] = useState(null);
    let [message, setMessage] = useState('')
    let [total, setTotal] = useState(0);

    function createNewNode(subject, amount) {
       console.log(linkedList.insertAt(subject, amount))
        console.log(linkedList["currentNode"])
        console.log(linkedList);
        console.log(linkedList.head);
        linkedList.currentNode=linkedList.head
        setCurrent(lL.currentNode)
        // linkedList.movingForward()
        // setCurrentNode(linkedList.currentNode)
        setMessage(linkedList.currentNode.show());
        amountTotals();
        console.log(lL.currentNode)
    };

    function nextNodeSelector() {
        linkedList.movingForward()
        setCurrent(linkedList.currentNode)
        console.log(linkedList)
        if (linkedList.currentNode != null)
            setMessage(linkedList.currentNode.show());

    }

    function prevNodeSelector() {
        console.log(linkedList)
        if (linkedList.priorNode != null) {
            console.log(linkedList.currentNode)
            linkedList.movingBackward()
            console.log(linkedList.currentNode)
            // setCurrentNode(linkedList.movingBackward());
            setMessage(linkedList.currentNode.show());
        }
        return;

    }

    function deleteCurrentNode() {
        linkedList.removeCurrent()
        // setCurrentNode(linkedList.removeCurrent())
        amountTotals();
        console.log(linkedList.currentNode)
        // console.log(currentNode)
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