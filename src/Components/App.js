import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "car Insurence",
      amount: 2000,
      date: new Date(2022, 11, 20),
      LocationOfExpenditure: "Uttarakhand",
    },
    {
      title: "Fuel refill",
      amount: 4000,
      date: new Date(2022, 1, 29),
      LocationOfExpenditure: "Delhi",
    },
    {
      title: "Rent",
      amount: 20000,
      date: new Date(2022, 12, 20),
      LocationOfExpenditure: "Delhi",
    },
    {
      title: "Tour",
      amount: 8000,
      date: new Date(2022, 12, 21),
      LocationOfExpenditure: "Goa",
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
        LocationOfExpenditure={expenses[0].LocationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
        LocationOfExpenditure={expenses[1].LocationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        amount={expenses[2].amount}
        LocationOfExpenditure={expenses[2].LocationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date}
        amount={expenses[3].amount}
        LocationOfExpenditure={expenses[3].LocationOfExpenditure}
      ></ExpenseItem>
    </div>
  );
}

export default App;
