import React from 'react'

export const IncomeExpense = () => {
    return (
        <div class="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" class="money plus">+RM0.00</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" class="money minus">-RM0.00</p>
        </div>
      </div>
    )
}
