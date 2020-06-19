import React from 'react';
import AccountStuff from './buisness/AccountController'
import AccountDisplayComp from './AccountDisplayComp'
import '../Display.css';
import { ThemeContext } from '../../contexts/AppContext';

class AccountsUI extends React.Component {
    static contextType = ThemeContext;
    constructor() {
        super();
        this.accountName = React.createRef();
        this.initialDeposit = React.createRef();
        this.state = {
            acctCtrl: new AccountStuff.AccountController(),
            balanceChange: '',
            total: 0,
            highest: 0,
            lowest: 0,
            message:""
        }
    }

    // handleNameInput = (e) => {
    //     this.setState({ accountName: e.target.value })
    // }

    // handleDepositInput = (e) => {
    //     this.setState({ initialDeposit: Number(e.target.value) })
    // }

    clearFields = () => {
        // this.setState({ accountName: "" });
        // this.setState({ initialDeposit: "" });
        this.accountName.current.value = "";
        this.initialDeposit.current.value = "";
    }

    handleBalanceChange = (balanceChange) => {
        this.setState({ balanceChange })
    }

    createAccountClick = () => {
        let msg = this.state.acctCtrl.addAccount({ accountName: this.accountName.current.value, balance: Number(this.initialDeposit.current.value) });
        if (msg){
            this.setState({message:msg})
        }else{
            this.setState({ acctCtrl: this.state.acctCtrl })
            this.clearFields(); 
            this.setState({message:""})
        }
    }

    handleDepositClick = (account) => {
        this.state.acctCtrl.accountDeposit(account.key, this.state.balanceChange);
        this.setState({ acctCtrl: this.state.acctCtrl })
        // this.setState({ balanceChange: 0 })
    }

    handleWithdrawClick = (account) => {
        this.state.acctCtrl.accountWithdraw(account.key, this.state.balanceChange);
        this.setState({ acctCtrl: this.state.acctCtrl })
    }

    handleCloseClick = (account) => {
        this.state.acctCtrl.removeAccount(account.key)
        this.setState({ acctCtrl: this.state.acctCtrl })
    }

    render() {
        const {theme} = this.context;

        console.log(this.state.acctCtrl)


        const totalCash = this.state.acctCtrl.totalCash();
        const biggestAcct = this.state.acctCtrl.biggestAccount();
        const smallestAcct = this.state.acctCtrl.smallestAccount();

        const cards = Object.keys(this.state.acctCtrl.accounts).map(key => {
            const account = this.state.acctCtrl.getAccount(key);
            return <AccountDisplayComp
                key={key}
                account={account}
                depositClick={this.handleDepositClick}
                withdrawClick={this.handleWithdrawClick}
                closeClick={this.handleCloseClick}
                onBalanceChange={this.handleBalanceChange}
                balanceChange={this.state.balanceChange}  />
        })

        return (
            <div className="AccountUI" >
                <div id="newAccount" style={{color: theme.syntax, background: theme.background}}>
                    <h1>Bank of EvolveU</h1>

                    {/* Account Name: <input name="accountName" value={this.state.accountName} onChange={this.handleNameInput} type="text" />
        Initial deposit: <input name="initialDeposit" value={this.state.initialDeposit} onChange={this.handleDepositInput} type="number" /> */}
        Account Name: <input id="idAccountName" ref={this.accountName} defaultValue='' type="text" />
        Initial deposit: <input id="idInitialDeposit" ref={this.initialDeposit} defaultValue='' type="number" />
                    <button name="createAccount" onClick={this.createAccountClick}>Add Account</button><br />
                    {this.state.message}
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
// AccountsUI.contextType=ThemeContext
export default AccountsUI;