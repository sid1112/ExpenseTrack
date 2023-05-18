import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";



function ExpenseItem(props) {


    const givenTitle = props.title; 
    // ## VERY IMPORTANT this state causes trouble with out key  when used with props.title
    const [title,setTitle] = useState(givenTitle);
    console.log("called expense item ", props.title ,title);
    

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
