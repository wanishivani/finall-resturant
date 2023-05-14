import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/CartContext";
const HeaderCartButton = (props) => {
  const [btnIsflash, setbtnIsflash] = useState(false);
  const cartCtx = useContext(CartContext);
  const { item } = cartCtx;

  const numberofcartitems = item.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsflash ? classes.bump : ""}`;
  useEffect(() => {
    if (item.length === 0) {
      return;
    }
    setbtnIsflash(true);
    const timer = setTimeout(() => {
      setbtnIsflash(false);
    }, 300);
    return ()=>clearTimeout(timer);
  }, [item]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> your Cart</span>
      <span className={classes.badge}>{numberofcartitems}</span>
    </button>
  );
};
export default HeaderCartButton;
