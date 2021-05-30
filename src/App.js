import React,{useState} from "react";
import Header from "./components/Header";
import Balance from "./components/Balance"
import Expences from "./components/Expences";
import TransactionList from "./components/TrainsationList";
import AddTransaction from "./components/Addtransation";
import './App.css';

function App() {
  const [list, setList] = useState(localStorage.getItem('transactions')!==null ? JSON.parse(localStorage.getItem('transactions')): []);

  const [income, setIncome] = useState(localStorage.getItem('income') !== null ? localStorage.getItem('income') : 0);
  const [expense, setExpense] = useState(localStorage.getItem('expense') !== null ? localStorage.getItem('expense') : 0);
  const onSave = (text, amount) => {
    setList(preVal => {
      localStorage.setItem('transactions', JSON.stringify([...preVal, {
        text,
        amount
      }]))
      return [...preVal, {
        text,
        amount
      }]
    });
    amount.trim(' ').charAt(0) !== "-" && setIncome(preVal => {localStorage.setItem('income',parseInt(parseInt(preVal) + parseInt(amount))); return parseInt(preVal) + parseInt(amount) })
    amount.trim(' ').charAt(0) === "-" && setExpense(preVal => {localStorage.setItem('expense',parseInt(parseInt(preVal) + parseInt(amount))); return parseInt(preVal) + parseInt(amount) })
    
  };
 
  function deleteHistory(id) {
    let trans = JSON.parse(localStorage.getItem('transactions'));
    trans.splice(id, 1);
    localStorage.setItem('transactions',JSON.stringify(trans))
    list[id].amount.trim(' ').charAt(0) !== "-" && setIncome(preVal => {localStorage.setItem('income',parseInt(parseInt(preVal) - parseInt(list[id].amount))); return parseInt(preVal) - parseInt(list[id].amount) })
    list[id].amount.trim(' ').charAt(0) === "-" && setExpense(preVal => {localStorage.setItem('expense',parseInt(parseInt(preVal) - parseInt(list[id].amount))); return parseInt(preVal) - parseInt(list[id].amount) })
    setList(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    
  }
  return (
    <div>
      <Header />
      <div className="container">
        <Balance balance={parseInt(income)+parseInt(expense)} />
        <Expences income={income} expense={expense} />
        <TransactionList data={list} onDeleteClicked={deleteHistory}/>
        <AddTransaction onSubmit={onSave} />
      </div>
    </div>
  );
}

export default App;
