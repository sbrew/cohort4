import React, { useState } from 'react';

function LinkedListInput(props) {

    const [amount, setAmount] = useState('');
    const [subject, setSubject] = useState('');

    function createNewNode() {
        props.createNewNode(subject, amount);
    };
    //add node component
    return (
        <div className="LinkedListDisplay">

            <h1>Create New Nodes here </h1>
            <div >
                <input name="isSubject" placeholder="Enter Subject" onChange={(e) => setSubject(e.target.value)} />
                <input name="isAmount" placeholder="Enter Amount" onChange={(e) => setAmount(e.target.value)} />
                <button onClick={createNewNode} >Enter Data</button>
            </div>

        </div>
    );


}

export default LinkedListInput;