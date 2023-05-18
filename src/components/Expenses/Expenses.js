import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import NewExpense from "../NewExpense/NewExpense";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const expenses = props.expenses;

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filterBasedOnYear = (expense) => {
    return expense.date.getFullYear() == filteredYear;
  };

  console.log(filteredYear, " file 1");
  const filteredExpenses = expenses.filter(filterBasedOnYear);
  console.log(filteredExpenses);
  let expensesContent = <p>No expenses found for {filteredYear}</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        changeHandler={filterChangeHandler}
      />
      {expensesContent}
      {/* <ExpenseItem
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
      /> */}
    </Card>
  );
};

export default Expenses;
