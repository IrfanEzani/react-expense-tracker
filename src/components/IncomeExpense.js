import React from 'react'

const IncomeExpense = () => {
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+RM0.00</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">-RM0.00</p>
        </div>
      </div>
    )
}

export {IncomeExpense}
