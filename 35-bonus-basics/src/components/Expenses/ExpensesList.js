import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList({ items }) {
  console.log(items);
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((item) => {
        return <ExpenseItem key={item.id} expenses={item} />;
      })}
    </ul>
  );
}
