import React from 'react';
import './AccountDisplay.css';


class AccountDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balanceChange: 0,
        }
    }

    handleDepositClick = () => {
        this.props.depositClick(this.state.balanceChange, this.props.name);
    }

    handleBalanceChange = (e) => {
        this.setState({ balanceChange: e.target.value })
    }

    handleWithdrawClick = () => {
        this.props.withdrawClick(this.state.balanceChange, this.props.name);
    }

    handleCloseClick = () => {
        this.props.closeClick(this.props.name);
    }


    render() {
        return (
            <div className="grid">
                <div id="updateAccount" className="accountCards">
                    <h2>Account name {this.props.name}</h2>
                    <h2>Account Balance ${this.props.balance}</h2>
                    <input id="update" onChange={this.handleBalanceChange} type="number" />
                    <button id="depositID" onClick={this.handleDepositClick}>Deposit</button>
                    <button id="withdrawID" onClick={this.handleWithdrawClick}>withdraw</button><br />
                    <button id="closeAcctID" onClick={this.handleCloseClick}>Close Account</button>
                </div>
            </div>
        );
    }
}

export default AccountDisplay;