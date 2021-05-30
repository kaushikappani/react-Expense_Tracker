import React,{useState} from "react";
import Header from "./components/Header";
import Balance from "./components/Balance"
import Expences from "./components/Expences";
import TransactionList from "./components/TrainsationList";
import AddTransaction from "./components/Addtransation";
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const onSave = (text, amount) => {
    setList(preVal => {
      return [...preVal, {
        text,
        amount
      }]
    });
    amount.trim(' ').charAt(0) !== "-" && setIncome(preVal => { return preVal + parseInt(amount) })
    amount.trim(' ').charAt(0) === "-" && setExpense(preVal => { return preVal + parseInt(amount) })
    
  };
 
  function deleteHistory(id) {
    list[id].amount.trim(' ').charAt(0) !== "-" && setIncome(preVal => { return preVal - parseInt(list[id].amount) })
    list[id].amount.trim(' ').charAt(0) === "-" && setExpense(preVal => { return preVal - parseInt(list[id].amount) })
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
        <Balance balance={income+expense} />
        <Expences income={income} expense={expense} />
        <TransactionList data={list} onDeleteClicked={deleteHistory}/>
        <AddTransaction onSubmit={onSave} />
      </div>
    </div>
  );
}

export default App;
