import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm({ onSaveExpenseData }) {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const inputChangeHandler = (id, value) => {
    if (id === "title") {
      setUserInput((prevState) => {
        return { ...prevState, title: value };
      });
    } else if (id === "amount") {
      setUserInput((prevState) => {
        return { ...prevState, amount: value };
      });
    } else if (id === "date") {
      setUserInput((prevState) => {
        return { ...prevState, date: value };
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      ...userInput,
      date: new Date(userInput.date),
    };

    onSaveExpenseData(expenseData);

    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            value={userInput.date}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
