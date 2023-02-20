// import { useDispatch } from "react-redux";
import Card from "../component/UI/Card";
import classes from "./ProductItem.module.css";
// import { itemAction } from "../../context/CartItem";
const ProductItem = (props) => {
  const { id, imageUrl, title, price } = props;
  //   const dispatch = useDispatch();

  const cartHandler = () => {
    const obj = {
      id: id,
      title: title,
      imgUrl: imageUrl,
      quantity: 1,
      amount: price,
    };
    // dispatch(itemAction.addItem(obj));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <div>{<img src={imageUrl}></img>}</div>
        </header>
        <div className={classes.pribtn}>
          <div className={classes.price}>${price.toFixed(2)}</div>
          <button className={classes.btn} onClick={cartHandler}>
            <span className={classes.btn2}>Add To Cart</span>
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
