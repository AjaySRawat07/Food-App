import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div
      className="header"
      id="header"
      style={{ backgroundImage: "url('./header_img.png')" }}
    >
      <div className="header-contents">
        <h2>Discover and Order Your Favorite Foods Here</h2>
        <p>
        Delivering Your Favorites | Straight to Your Door | Delicious Meals in Minutes | From Kitchen to Your Home | Timely and Satisfying Delivery | Focused on Fulfilling Your Hunger Pangs.
        </p>

        <a href="#explore-menu">
          <button> View Menu </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
