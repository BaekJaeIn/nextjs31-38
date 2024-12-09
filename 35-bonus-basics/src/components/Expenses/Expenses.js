import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((item) => {
        return <ExpenseItem expenses={item} />;
      })}
    </Card>
  );
}
