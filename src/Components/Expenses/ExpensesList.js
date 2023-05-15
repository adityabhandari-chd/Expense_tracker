import React from "react";
import Expense from "./Expense";
import "./ExpenseList.css";

import Expenses from "./Expenses";

const ExpensesList = (props) => {
  // let ExpensesContent = <p>No content found</p>;
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <Expense
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
