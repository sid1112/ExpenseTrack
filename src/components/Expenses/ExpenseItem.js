import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";



function ExpenseItem(props) {

    const [title,setTitle] = useState(props.title);
    console.log("called expense item ");
    const clickHandler = () => {
      setTitle("updatedState");
      console.log(title);
    }
    

    return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    <button onClick={clickHandler}> click me </button>
    </Card>
  );
}

export default ExpenseItem;
