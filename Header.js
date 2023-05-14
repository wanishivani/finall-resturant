import { Fragment } from "react";
import mealsImage from "../../Assets/meals.jpg";
import "./Header.modules.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className='header'>
        <h1>Candy</h1>
        <HeaderCartButton onClick={props.onshowCart} />
      </header>
      <div className="main_image">
        <img src={mealsImage} alt="A table of full of delious food!" />
      </div>
    </Fragment>
  )
};
export default Header;
