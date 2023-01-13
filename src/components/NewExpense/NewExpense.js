import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = (e) => {
    setIsEditing(true);
  };

  const cancelFormHandler = () => {
    setIsEditing(false);
  };
  const expenseDataSaveHandler = (expenseData) => {
    // console.log("From the New Expense Component");
    // console.log(expenseData);
    const e_data = {
      id: Math.random().toString(),
      ...expenseData,
    };

    props.onAddExpenseData(e_data);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add a new expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={expenseDataSaveHandler}
          onCancelForm={cancelFormHandler}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpense;
