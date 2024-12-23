import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

export default function Modal(props) {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate("/");
  };

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open={true} className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
}
