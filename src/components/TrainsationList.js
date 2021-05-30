import React from 'react';
import {ListItem} from "./ListItem";

const TrainsationList = (props) => {
    const handleDelete = (id) => {
        props.onDeleteClicked(id);
    }
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {props.data.map((item, index) => {
                    let expense;
                    item.amount.trim(" ").charAt(0)==='-' ? expense=true :expense=false
                    return <ListItem fun= {handleDelete} expense={expense} key={index} id={index} text={item.text} amount={item.amount}/>
                })}
            </ul>
        </>
    )
};

export default TrainsationList;
