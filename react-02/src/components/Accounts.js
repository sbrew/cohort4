import React from 'react';
import AccountController from './AccountController'
import AccountDisplay from './AccountDisplay'

let acctCtrl = new AccountController();


class AccountsUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            initialDeposit: 0,
            cards: [],
            total: acctCtrl.totalCash(),
            highest: "",
            lowest: ""
        }
    }
    displayBiggestAcct = () => {
        this.setState({highest: acctCtrl.biggestAccount()})
    }


    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }

    handleDepositChange = (e) => {
        this.setState({ initialDeposit: e.target.value })
    }

    createAccountClick = () => {
        acctCtrl.addAccount(this.state.name, this.state.initialDeposit);
        this.makeCards();
        this.displayBiggestAcct();
    }

    handleDepositClick = (amount, name) => {
        acctCtrl.accountDeposit(name, amount);
        this.makeCards();
    }

    handleWithdrawClick = (amount, name) => {
        acctCtrl.accountWithdraw(name, amount);
        this.makeCards();
    }

    handleCloseClick = (name) => {
        acctCtrl.removeAccount(name);
        this.makeCards();
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

        Account Name: <input name="accountName" onChange={this.handleNameChange} type="text" />
        Initial deposit: <input name="initialDeposit" onChange={this.handleDepositChange} type="number" />
                    <button name="createAccount" onClick={this.createAccountClick}>Add Account</button>
                </div><br />
                <h2>Accounts and Balances</h2>
                <div id="showBalanceID" className="clCard">
                    {this.state.cards}
                    For All your Banking needs!
                    <div id="arrayTasks">
                        Total Value of Accounts ${this.state.total}<br />
                        Highest Value Account {this.state.highest.accountName}<br />
                        Lowest Value Account $
                    </div>
                </div>
            </div>
        );
    }
}
export default AccountsUI;

