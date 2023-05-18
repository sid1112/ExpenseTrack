import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";


const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log("THis was called");
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setShowFormToFalse(false);
  };

  
  const setShowFormToFalse = ()=>{
    setShowForm(false);
  };
  
  return (
    <div className="new-expense">
      {!showForm ? (
        <button onClick={()=>{setShowForm(true)}}> Add new Expense </button>
      ) : (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} toggleForm={setShowFormToFalse}/>
      )}
    </div>
  );
};

export default NewExpense;
