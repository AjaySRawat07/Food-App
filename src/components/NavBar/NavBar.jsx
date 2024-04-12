import React, { useContext, useState } from "react";
import "./NavBar.css";
import { Link} from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
const NavBar = ({ setShowLonIn }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmmount, logInStatus} =
    useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="logo">HungryBear</h1>
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          HOME
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          MENU
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          APP
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          CONTACT
        </a>
      </ul>
      <div className="navbar-right">
        {/* <img src={assets.search_icon} alt="" /> */}
        {/* <img src="./searching.gif" alt="" /> */}
        <div className="navbar-search-icon">
          {/* <img src={assets.basket_icon} alt="" /> */}
          <Link to="/cart">
            {" "}
            <img src="./grocery.gif" alt="" />{" "}
          </Link>
          <div className={getTotalCartAmmount() === 0 ? "" : "dot"}></div>
        </div>
        {logInStatus ? (
          <i
            class="fa-solid fa-user"
            style={{ fontSize: "32px", color: "tomato", cursor: "pointer" }}
          ></i>
        ) : (
          <button onClick={() => setShowLonIn(true)}>sign in</button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
