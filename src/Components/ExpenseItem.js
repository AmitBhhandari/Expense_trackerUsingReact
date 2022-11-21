import ExpenseDetail from "./ExpenseDetails";
import ExpenseDate from "./Expense date";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    

  return (
    <div className="expense-item">
        <ExpenseDate date={props.date}/> 
      <div>
        <h3>{props.LocationOfExpenditure}</h3>
      </div>
      <div className="expense-item__description">
        <ExpenseDetail amount={props.amount}/>
      </div>
    </div>
  );
}
export default ExpenseItem;
