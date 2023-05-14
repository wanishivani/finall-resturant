import "./MealsItemForm.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";
const MealsItemForm = (props) => {
  const AmountRef = useRef();
  const [isamountIsValid,setAmountIsValid]=useState(true);
  const SubmitHandler = (event) => {
    event.preventDefault();
    const enterdAmount = AmountRef.current.value;
    const enterdAmountNumber = +enterdAmount;
  
  if (
    enterdAmount.trim().length === 0 ||
    enterdAmountNumber < 1 ||
    enterdAmountNumber > 5
  ) {
    setAmountIsValid(false);
    return;
  }
  props.onAddToCart(enterdAmountNumber);
}
  return (
    <form className="form" onSubmit={SubmitHandler}>
      <Input
        ref={AmountRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> +Add</button>
      {!isamountIsValid && <p>Please enter a value 1-5.</p>}
    </form>
  );
};
export default MealsItemForm;
