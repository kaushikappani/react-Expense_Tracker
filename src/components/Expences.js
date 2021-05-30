import React, { useState } from 'react';
const Expences = (props) => {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+${props.income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-${Math.abs(props.expense)}</p>
            </div>
        </div>
    )
};
export default Expences;
