import React ,{useState} from 'react'

const Addtransation = (props) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {

        props.onSubmit(text, amount);
        setAmount("");
        setText("")
        e.preventDefault();
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input onChange={(e)=>setText(e.target.value)} type="text" id="text" value={text} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                    <input onChange={(e)=>setAmount(e.target.value)} type="number" id="amount" value={amount} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
};

export default Addtransation;
