import React from 'react';


const LinkedListNodeComp = ({ node }) => {


    return (
        <div>
            <h2>Subject {node.subject}</h2>
            <h2>Amount {node.amount}</h2>
            {/* <button onClick={currentNodeSelector}>Set as Current Node</button> */}
        </div>
    )
}

export default LinkedListNodeComp;