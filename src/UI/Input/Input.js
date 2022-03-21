import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <input className={classes.modified_input} {...props}>
      {props.children}
    </input>
  );
};

export default Input;
