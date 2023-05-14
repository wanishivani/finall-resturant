import {  useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider.js";
function App() {
  const [cartIsshown, setCartIsshown] = useState(false);

  const shownChangeHandler = () => {
    setCartIsshown(true);
  };
  const hideChangeHandler = () => {
    setCartIsshown(false);
  };
  return (
    <CartProvider>
      {cartIsshown && <Cart onClose={hideChangeHandler} />}

      <Header onshowCart={shownChangeHandler} />

      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
