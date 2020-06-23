import React from 'react';
import '../Display.css';
import { ThemeContext } from '../../contexts/AppContext';


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
        const  {theme} = this.context;
 

        return (

                    <div style={{ color: theme.syntax, background: theme.background }} className="accountCards">
                        <h2>Account Name {this.state.account.accountName}</h2>
                        <h2>Account Balance ${this.state.account.balance}</h2>
                        <input id={this.state.account.accountName} defaultValue="" onChange={this.handleBalanceChange} type="number" />
                        <button id="depositID"  onClick={this.handleDepositClick}>Deposit</button>
                        <button id="withdrawID" onClick={this.handleWithdrawClick}>Withdraw</button><br />
                        <button id="closeAcctID" onClick={this.handleCloseClick}>Close Account</button>
                    </div>
                )
    }
}
AccountDisplayComp.contextType=ThemeContext
export default AccountDisplayComp;