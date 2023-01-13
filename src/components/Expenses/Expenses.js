import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import React, { useState } from "react";
import Card from "../UI/Card";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2019");

  const yearSelectHandler = (year) => {
    setFilterYear(year);
  };

  const yearlyExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === Number.parseInt(filterYear);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterYear}
          onYearSelect={yearSelectHandler}
        ></ExpensesFilter>
        <ExpenseChart yearlyExpenses={yearlyExpenses} />
        <ExpensesList yearlyExpenses={yearlyExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
