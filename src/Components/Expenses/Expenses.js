import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <>
      <div>
        <Card className="expenses">
          <ExpensesFilter
            onChangeFilter={filterChangeHandler}
            selected={filteredYear}
          />
          <ExpensesChart expenses={filteredExpense} />

          <ExpensesList items={filteredExpense} />
        </Card>
      </div>
    </>
  );
}
export default Expenses;
