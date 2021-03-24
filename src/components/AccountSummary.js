import React from 'react'

export const AccountSummary = () => {

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    Rs. 1000
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">
                    Rs. 900
                </p>
            </div>
        </div>
    )
}