import React, { useContext } from 'react'

//import global context
import { GlobalContext } from '../context/GlobalSate';

//import transation component
import { Transaction } from './Transaction';

export const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext);

    console.log(transactions);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map(transaction =>(
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </div>
    )
}