
import ExpenseDetail from "./ExpenseDetails";
import ExpenseDate from "./Expense date";
import "./ExpenseItem.css";
import Card from "../UI/Card";


const ExpenseItem=(props)=> {
    

  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/> 
     
      <div className="expense-item__description">
        <ExpenseDetail amount={props.amount} title={props.title}/>
      </div>
    </Card>
  );
}
export default ExpenseItem;
