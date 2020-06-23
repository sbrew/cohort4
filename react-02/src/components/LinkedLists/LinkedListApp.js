import React, { useState } from 'react';
import linkedLists from './buisness/index';
import LinkedListDisplay from './LinkedListDisplayComp'
import LinkedListInput from './LLInput'

let linkedList = new linkedLists.LinkedList()

function LinkedListApp() {

    // let [linkedList, setLinkedList] = useState(new linkedLists.LinkedList());
    let [current, setCurrent] = useState('');

    let [total, setTotal] = useState(0);

    function createNewNode(subject, amount) {
        linkedList.insertAtNext(subject, amount)
        setCurrent(linkedList.currentNode.show())
        amountTotals();
    };

    function nextNodeSelector() {
        if (linkedList.size > 0) {
            linkedList.movingForward()
            setCurrent(linkedList.currentNode.show());
        }
    }

    function prevNodeSelector() {
        if(current==="linked list head"){
            return;
        }
        else if (linkedList.size > 0 && linkedList.currentNode.priorNode!=null) {
            linkedList.movingBackward()
            setCurrent(linkedList.currentNode.show());
        } else if (linkedList.size > 0 && linkedList.currentNode.priorNode===null){
            linkedList.movingBackward()
            setCurrent("linked list head");
        }
    }

    function deleteCurrentNode() {
        linkedList.removeCurrent()
        amountTotals();
        if (linkedList.currentNode != null) {
            setCurrent(linkedList.currentNode.show());
        } else
            setCurrent('')
    }

    function firstNodeSelector() {
            linkedList.goToHeadNode()
            setCurrent(linkedList.currentNode.show());
        }
    

    function lastNodeSelector() {
        linkedList.goToTailNode()
        setCurrent(linkedList.currentNode.show());
    }


    function amountTotals() {
        setTotal(linkedList.totalFunction());
    }

    return (

        <div className="LinkedListComp">

            <h1>Build some Linked list stuff here</h1>

            <LinkedListInput
                createNewNode={createNewNode}
            />
            <LinkedListDisplay
                linkedList={linkedList}
                current={current}
                nextNodeSelector={nextNodeSelector}
                prevNodeSelector={prevNodeSelector}
                deleteCurrentNode={deleteCurrentNode}
                lastNodeSelector={lastNodeSelector}
                firstNodeSelector={firstNodeSelector}
                total={total} />

        </div>

    );


}
export default LinkedListApp;