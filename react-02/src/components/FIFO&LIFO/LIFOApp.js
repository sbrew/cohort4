import React, { useState } from 'react';

function LIFOApp(props) {
    const [newItem, setNewItem] = useState('')

    function putIn() {
        props.putIn(newItem);
    };

    function takeOut() {
        props.takeOut();
    };

    return (
        <div className="LIFOApp">
            <h2> {props.message}</h2>


            <div>
                <input name="isNewItem" defaultValue="" placeholder="Enter Item" id="iDNewItem" onChange={(e) => setNewItem(e.target.value)} />
                <button onClick={putIn}>Put In</button>
                <button onClick={takeOut}>Take Out</button>
            </div>
        </div>
    );
}

export default LIFOApp;