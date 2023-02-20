import classes from "./CartButton.module.css";
import CartIcon from "./CartIcon";

const CartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};
 
export default CartButton;
