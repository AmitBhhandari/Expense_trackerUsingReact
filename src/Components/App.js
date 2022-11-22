import Expenses from "./Components/Expenses/Expenses";


const App=()=> {
  const expenses = [
    {
      title: "car Insurence",
      amount: 2000,
      date: new Date(2022, 11, 20),
      
    },
    {
      title: "Fuel refill",
      amount: 4000,
      date: new Date(2022, 1, 29),
     
    },
    {
      title: "Rent",
      amount: 20000,
      date: new Date(2022, 12, 20),
      
    },
    {
      title: "Tour",
      amount: 8000,
      date: new Date(2022, 12, 21),
      
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      
      <Expenses items={expenses}/>
    
    </div>
  );
}

export default App;
