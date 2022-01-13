import btnStyles from "./Button.module.css";

const Button = (props) => {
  return <button className={btnStyles.btn}>{props.value}</button>;
};

export default Button;
