import React from 'react'

export const ListItem = (props) => {

    const handelClick = () => {
        props.fun(props.id)
    }

    return (
        <li className={props.expense ? 'minus':'plus'} >
            {props.text} <span>{props.expense ? '-':'+'}${props.expense ? props.amount.slice(1): props.amount}</span><button onClick={handelClick} className="delete-btn">x</button>
                </li>
    )
}
