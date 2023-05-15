import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseDate from "./ExpenseDate";

function Expense(props) {
  // const expenseDate = new Date().getFullYear();
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 300;
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
}
export default Expense;
