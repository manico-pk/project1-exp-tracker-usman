import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalSate';
export const Transaction = ({ transaction }) => {

    //const sign = transaction.tra > 0 ? '+' : '-';
    const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';

    const { delTransaction } = useContext(GlobalContext);

    return(
        <li className={transactionType}>
            {transaction.description}
            <span>Rs. {transaction.transactionAmount}</span>
            <button className="delete-btn" onClick = {()=>delTransaction(transaction.id)}>X</button>
        </li>
    )
}