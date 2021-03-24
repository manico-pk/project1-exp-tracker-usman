import React, { useState, useContext } from 'react'

// Import the Global State
import { GlobalContext } from '../context/GlobalSate';

export const AddTransaction = () => {
    
    const [description, setDescription ] = useState();
    const [transactionAmount, setTransactionAmount ] = useState();

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);

    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Desription
                    </label>
                    <input  type="text" 
                            id="description" 
                            placeholder="Enter Transaction Detail" 
                            value={description}
                            onChange={(e)=>{setDescription(e.target.value)}}
                            required="required"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input  type="number" 
                            id="transactionamount" 
                            placeholder="Enter Transaction Amount"
                            value = {transactionAmount}
                            onChange={(e)=>{setTransactionAmount(e.target.value)}}
                            required="required"
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}