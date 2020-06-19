import React, { useState, useEffect, useContext } from 'react';
import LIFOApp from './LIFOApp'
// import qSFunctions from './buisness/FIFO_LIFO';
import ListDisplay from './QSDisplay'
import { ThemeContext } from '../../contexts/AppContext';

// let queue = new qSFunctions.Queue()
// let stack = new qSFunctions.Stack()

function DataStructureApp() {
    let  {queue, stack}  = useContext(ThemeContext);
    // console.log(queue)
    const [isStack, setIsStack] = useState(false);
    const [newObject, setNewObject] = useState('')
    const [deletedObject, setDeletedObject] = useState('')
    // const [itemList, setItemList] = useState([])

    function onIsStack(e) {
        setIsStack(isStack ? false : true);
    }

    function putIn(newObj) {
        if ((isStack === false)) {
            queue.putIn(newObj)
            stack.items = queue.items
            // setItemList(queue.items)
            stack.newItem = queue.newItem
            stack.lastKey = queue.lastKey
            setNewObject(queue.newItem.name)
            // console.log(stack.items.length)
        } else {
            stack.putIn(newObj)
            queue.items = stack.items
            queue.newItem = stack.newItem
            queue.lastKey = stack.lastKey
            setNewObject(stack.newItem.name)
            // setItemList(stack.items)
        }
    }

    function takeOut() {
        if ((isStack === false)) {
            if (queue.items.length > 0) {
                setDeletedObject(queue.takeOut().name);
                stack.items = queue.items
                stack.newItem = queue.newItem
                stack.lastKey = queue.lastKey
                setNewObject(queue.newItem.name)
            }
        } else {
            if (stack.items.length > 0) {
                setDeletedObject(stack.takeOut().name)
                queue.items = stack.items
                queue.newItem = stack.newItem
                queue.lastKey = stack.lastKey
                setNewObject(stack.newItem.name)
            }
        }
    }

    useEffect(() => {
        document.getElementById('iDNewObject').textContent = `New Item Added: ${newObject}`;
        document.getElementById('iDDeletedObject').textContent = `Recently Deleted Item: ${deletedObject}`;
      });

    let output;

    if (isStack) {
        output =
            <LIFOApp
                stack={stack}
                putIn={putIn}
                takeOut={takeOut}
                message={'Stack aka Last in First out'}
            />
    } else {
        output =
            <LIFOApp
                queue={queue}
                putIn={putIn}
                takeOut={takeOut}
                message={'Queue aka First in First out'}
            />
    }

    return (
        <div className="QSApp">
            <h1>Queues & Stacks aka FIFO & LIFO</h1>
            <main className="QS App-main">
                <h3 id='iDNewObject'>New Item Added:</h3>
                <h3 id='iDDeletedObject'>Recently Deleted Item:</h3>
                {output}
                <div>
                    <label>
                        Queue/Stack
          <input id="iDIsStack" type="checkbox" checked={isStack} onChange={onIsStack} />
                    </label>
                </div>
            </main><br /><br />
            <div>
                <ListDisplay
                    itemList={queue}
                />
            </div>
        </div>
    );
}

export default DataStructureApp;