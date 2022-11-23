import ExpenseDetail from "./ExpenseDetails";
import ExpenseDate from "./Expense date";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("Clicked");
  };

  const parentNode = document.getElementsByClassName("expenses")[0];
  const childNode = document.getElementsByClassName("expense-item")[0];
  const DeleteHandler = () => {
    console.log("delete");
    // console.log(parentNode);
    console.log(childNode);
    if (childNode) {
      parentNode.removeChild(childNode);
      console.log("childnode is present");
    }
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <ExpenseDetail amount={props.amount} title={props.title} />
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={DeleteHandler}>Delete Expense</button>
    </Card>
  );
};
export default ExpenseItem;
