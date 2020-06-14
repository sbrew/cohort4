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
                <input name="isSubject" value="" placeholder="Enter Subject" id="iDSubject" onChange={(e) => setSubject(e.target.value)} />
                <input name="isAmount" value="" placeholder="Enter Amount" id="iDAmount" onChange={(e) => setAmount(e.target.value)} />
                <button onClick={createNewNode} >Enter Data</button>
            </div>

        </div>
    );


}

export default LinkedListInput;