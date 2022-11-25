import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";

const DUMMY_EXPENSES = [
  { 
    id:"e1",
    title: "car Insurence",
    amount: 2000,
    date: new Date(2022, 11, 20),
  },
  {
    id:'e2',
    title: "Fuel refill",
    amount: 4000,
    date: new Date(2022, 1, 29),
  },
  {
    id:'e3',
    title: "Rent",
    amount: 20000,
  date: new Date(2022, 12, 20),
  },
  {
    id:'e4',
    title: "Tour",
    amount: 8000,
    date: new Date(2022, 12, 21),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
