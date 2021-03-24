import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">
                        Desription
                    </label>
                    <input type="text" id="description" placeholder="Enter Transaction Detail" />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input type="number" id="transactionamount" placeholder="Enter Transaction Amount" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}