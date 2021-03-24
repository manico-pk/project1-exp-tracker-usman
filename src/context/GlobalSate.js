import React, { createContext, useReducer } from 'react';

// Import the Reducer
import { AppReducer } from './AppReducer';


//create the inital stste
const initialState = {
    transactions : [
        {id:1, description: 'Income 1', transactionAmount: 100},
        {id:2, description: 'Exense 1', transactionAmount: -100},
        {id:3, description: 'Income 2', transactionAmount: 100},
        {id:4, description: 'Expense 2', transactionAmount: -100},
        {id:5, description: 'Income 3', transactionAmount: 100}
    ]
}

// Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider for the Global Context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions for Transactions

        // Delete Existing Transaction Action
        function delTransaction(id) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        }

        // Add New Transaction Action
        function addTransaction(transaction) {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            })
        }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );

}