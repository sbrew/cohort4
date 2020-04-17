import React from 'react';

class OddComp extends React.Component {
    
    render() {
        return (
            <div>
                <h1>Im the Odd Component {this.props.whatToSay}</h1>
            </div>
        )
    }
}

export default OddComp;