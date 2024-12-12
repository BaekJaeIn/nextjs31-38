import classes from "./Button.module.css";

export default function Button({ children, type, onClick }) {
  return (
    <button
      className={classes.button}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
