import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  
  const [filteredYear, setFilteredYear] = useState('2020');

  const expenses = props.expenses;

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
  };

  
  console.log(filteredYear," file 1");

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        changeHandler={filterChangeHandler}
      />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </Card>
  );
};

export default Expenses;
