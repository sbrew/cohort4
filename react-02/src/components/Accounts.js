import React from 'react';
import AccountController from './AccountController'
import AccountDisplayComp from './AccountDisplayComp'
import './Display.css';

// let acctCtrl = new AccountController();

class AccountsUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            acctCtrl: new AccountController(),
            accountName: "",
            initialDeposit: 0,
            balanceChange: 0,
            total: 0,
            highest: 0,
            lowest: 0
        }
    }

    handleNameInput = (e) => {
        this.setState({ accountName: e.target.value })
    }

    handleDepositInput = (e) => {
        this.setState({ initialDeposit: e.target.value })
    }

    clearFields = () => {
        this.setState({ accountName: "" });
        this.setState({ initialDeposit: "" });
    }

    handleBalanceChange = (balanceChange) => {
        this.setState({ balanceChange })
    }

    createAccountClick = () => {
        this.state.acctCtrl.addAccount(this.state.accountName, this.state.initialDeposit);
        this.clearFields();
    }

    handleDepositClick = (props) => {
        this.state.acctCtrl.accountDeposit(props.accountName, this.state.balanceChange);
        this.setState({ acctCtrl: this.state.acctCtrl })

    }

    handleWithdrawClick = (props) => {
        this.state.acctCtrl.accountWithdraw(props.accountName, this.state.balanceChange);
        this.setState({ acctCtrl: this.state.acctCtrl })
    }

    handleCloseClick = (props) => {
        this.state.acctCtrl.removeAccount(props.accountName)
        this.setState({ acctCtrl: this.state.acctCtrl })
    }

    render() {
        const totalCash = this.state.acctCtrl.totalCash();
        const biggestAcct = this.state.acctCtrl.biggestAccount();
        const smallestAcct = this.state.acctCtrl.smallestAccount();

        const cards = this.state.acctCtrl.accountArray.map(account => {
            return <AccountDisplayComp
                key={account.key}
                account={account}
                depositClick={this.handleDepositClick}
                withdrawClick={this.handleWithdrawClick}
                closeClick={this.handleCloseClick}
                onBalanceChange={this.handleBalanceChange}
                balanceChange={this.state.balanceChange}
            />
        })
        return (
            <div className="AccountUI" >
                <div id="newAccount">

                    <h1>Bank of EvolveU</h1>

        Account Name: <input name="accountName" value={this.state.accountName} onChange={this.handleNameInput} type="text" />
        Initial deposit: <input name="initialDeposit" value={this.state.initialDeposit} onChange={this.handleDepositInput} type="number" />
                    <button name="createAccount" onClick={this.createAccountClick}>Add Account</button>
                </div><br />
                <h2>Accounts and Balances</h2>
                <div id="showBalanceID" className="grid">
                    {cards}
                </div>
                <h2>For All your Banking needs!</h2>
                <div id="arrayTasks">
                    Total Value of Accounts ${totalCash}<br />
                        Highest Value Account ${biggestAcct}<br />
                        Lowest Value Account ${smallestAcct}
                </div>

            </div>
        );
    }
}
export default AccountsUI;

