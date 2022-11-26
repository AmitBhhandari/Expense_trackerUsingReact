import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css"


const NewExpenses=(props)=>{
    const[isEditing,SetEditing]=useState(false);

   const saveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData = {
        ...enteredExpenseData,
        id:Math.random().toString()    
        };
        //console.log(expenseData);
        props.onAddExpense(expenseData);
        SetEditing(false);
   }
        const startEditingHandler=()=>{
            SetEditing(true)
        }

        const stopEditingHandler=()=>{
            SetEditing(false)
        }
    return(
        <div className="new-expense">
            {!isEditing &&<button onClick={startEditingHandler}>Add Expense</button>}
            {isEditing &&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}

        </div>
    )
}
export default NewExpenses;