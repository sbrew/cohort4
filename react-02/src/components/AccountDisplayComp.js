import React from 'react';
import './Display.css';


class AccountDisplayComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balanceChange: props.balanceChange,
            account: props.account
        }
    }
    
    handleBalanceChange = (e) => {
        this.props.onBalanceChange(Number(e.target.value))
    }

    handleDepositClick = () => {
        this.props.depositClick(this.state.account, this.state.balanceChange);
    }


    handleWithdrawClick = () => {
        this.props.withdrawClick(this.state.account, this.state.balanceChange);
    }

    handleCloseClick = () => {
        this.props.closeClick(this.state.account);
    }


    render() {
        return (
                <div className="accountCards">
                    <h2>Account name {this.state.account.accountName}</h2>
                    <h2>Account Balance ${this.state.account.balance}</h2>
                    <input id={this.state.account.accountName} value="" onChange={this.handleBalanceChange} type="number" />
                    <button id="depositID" data-testid={this.state.account.accountName} onClick={this.handleDepositClick}>Deposit</button>
                    <button id="withdrawID" onClick={this.handleWithdrawClick}>withdraw</button><br />
                    <button id="closeAcctID" onClick={this.handleCloseClick}>Close Account</button>
                </div>
        );
    }
}

export default AccountDisplayComp;