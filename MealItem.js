import "./Meals.css";
import MealsItemForm from "./MealsItemForm";
import { useContext } from "react";
import CartContext from "../../../Store/CartContext";
const MealItem = (props) => {
  const CartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const AddToCartHandler = amount => {
    CartCtx.additem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div classename="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealsItemForm onAddToCart={AddToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
