import React from 'react';
import './App.css';
import Header from './component/Header'
import Balance from './component/Balance'
import {IncomeExpense} from './component/incomeExpense'
import {TransactionList} from './component/TransactionList'
import { AddTransaction } from './component/AddTransaction'
import {GlobalProvider} from './context/globalState'
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
