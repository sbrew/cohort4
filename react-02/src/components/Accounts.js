import React from 'react';
import AccountController from './AccountController'
import AccountDisplay from './AccountDisplay'
import './AccountDisplay.css';

let acctCtrl = new AccountController();

class AccountsUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            initialDeposit: 0,
            cards: [],
            total: acctCtrl.totalCash(),
            highest: 0,
            lowest: 0
        }
    }

    displayBiggestAcct = () => {
        this.setState({ highest: acctCtrl.biggestAccount() })
    }

    displaySmallestAcct = () => {
        this.setState({ lowest: acctCtrl.smallestAccount() })
    }


    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }

    handleDepositChange = (e) => {
        this.setState({ initialDeposit: e.target.value })
    }

    clearFields = () => {
        this.setState({ name: "" });
        this.setState({ initialDeposit: "" });
    }

    createAccountClick = () => {
        acctCtrl.addAccount(this.state.name, this.state.initialDeposit);
        this.makeCards();
        this.displayBiggestAcct();
        this.displaySmallestAcct();
        this.clearFields();
    }

    handleDepositClick = (amount, name) => {
        acctCtrl.accountDeposit(name, amount);
        this.makeCards();
        this.displayBiggestAcct();
        this.displaySmallestAcct();
    }

    handleWithdrawClick = (amount, name) => {
        acctCtrl.accountWithdraw(name, amount);
        this.makeCards();
        this.displayBiggestAcct();
        this.displaySmallestAcct();
    }

    handleCloseClick = (name) => {
        acctCtrl.removeAccount(name);
        this.makeCards();
        this.displayBiggestAcct();
        this.displaySmallestAcct();
    }

    makeCards = () => {
        let size = acctCtrl.accountArray.length;
        let x = [];
        for (let i = 0; i < size; i++) {
            x.push(<AccountDisplay
                name={acctCtrl.accountArray[i].accountName}
                balance={acctCtrl.accountArray[i].balance}
                key={acctCtrl.accountArray[i].key}
                depositClick={this.handleDepositClick}
                withdrawClick={this.handleWithdrawClick}
                closeClick={this.handleCloseClick}
            />)
        }
        this.setState({ cards: x })
        this.setState({ total: acctCtrl.totalCash() })
    }

    componentDidMount() {
        this.makeCards();
    }


    render() {
        return (
            <div className="AccountUI" >
                <div id="newAccount">

                    <h1>Bank of EvolveU</h1>

        Account Name: <input name="accountName" value={this.state.name} onChange={this.handleNameChange} type="text" />
        Initial deposit: <input name="initialDeposit" value={this.state.initialDeposit} onChange={this.handleDepositChange} type="number" />
                    <button name="createAccount" onClick={this.createAccountClick}>Add Account</button>
                </div><br />
                <h2>Accounts and Balances</h2>
                <div id="showBalanceID" className="clCard grid">
                    {this.state.cards}
                </div>
                   <h2>For All your Banking needs!</h2>
                <div id="arrayTasks">
                    Total Value of Accounts ${this.state.total}<br />
                        Highest Value Account ${this.state.highest}<br />
                        Lowest Value Account ${this.state.lowest}
                </div>

            </div>
        );
    }
}
export default AccountsUI;

