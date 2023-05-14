import CartContext from "./CartContext";
import { useReducer } from "react";
const defaultCartstate = {
  item: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const UpdatetotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const exitingItemIndex = state.item.findIndex(
      (item) => item.id === action.item.id
    );

    const exitingItem = state.item[exitingItemIndex];
    let UpdateItem;
    if (exitingItem) {
      const UpdateItems = {
        ...exitingItem,
        amount: exitingItem.amount + action.item.amount
      };
      UpdateItem = [...state.item];
      UpdateItem[exitingItemIndex] = UpdateItems;
    } else {
       UpdateItem = state.item.concat(action.item);
    }

    return {
      item: UpdateItem,
      totalAmount: UpdatetotalAmount,
    };

  }

  if(action.type==='Remove'){
    const exitingItemIndex = state.item.findIndex(
      (item) => item.id === action.id
    );  
    const exitingItem = state.item[exitingItemIndex];
    const totalAmount=state.totalAmount-exitingItem.price;
    let UpdateItem;
    if(exitingItem.amount===1){
       UpdateItem= state.item.filter(item=>item.id !==action.id);
      
     } else
    { const UpdateItems ={...exitingItem,amount: exitingItem.amount-1};
      UpdateItem=[...state.item];
      UpdateItem[exitingItemIndex] = UpdateItems;

    }
 return{
    item:UpdateItem, 
    totalAmount:totalAmount
 }
  }
  return defaultCartstate;
};

const CartProvider = (props) => {
  const [cartState, dispatchChartaction] = useReducer(
    cartReducer,
    defaultCartstate
  );
  const additemHandler = (item) => {
    dispatchChartaction({ type: "ADD", item: item });
  };
  const removeitemHandler = (id) => {
    dispatchChartaction({ type: "Remove", id: id });
  };
  const cartContext = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
    additem: additemHandler,
    removeitem: removeitemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
