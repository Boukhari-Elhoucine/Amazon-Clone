import React from "react";
import Logo from "./amazon_PNG25.png";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebaseConfig";
function Header() {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="logo" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__options">
            <span className="header__optionOne">Hello {user?.email}</span>
            <span className="header__optionTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header__link">
          <div className="header__options">
            <span className="header__optionOne">Return</span>
            <span className="header__optionTwo">Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionOne">Your</span>
            <span className="header__optionTwo">Prime</span>
          </div>
        </Link>
        <Link to="check" className="header__link">
          <div className="header__basket">
            <ShoppingBasketIcon />
            <span className="header__basketOption">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
