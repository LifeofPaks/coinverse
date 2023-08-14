import React from "react";
import "./Menu.scss";
import { Link } from "react-router-dom";
import Logo from '../../Assests/Images/icons8-logo-100.png'

const Menu = () => {
  return (
    <div className="menu">

      <div className="navLinks">
        <Link to="/" className="link">
          <img
            src="https://img.icons8.com/ios-filled/100/FFFFFF/home.png"
            alt="home"
          />
          <p>Home</p>
        </Link>

        <Link to="/cryptocurrencies" className="link">
          <img
            src="https://img.icons8.com/color/48/bitcoin--v1.png"
            alt="bitcoin--v1"
          />
          <p>Cryptocurrencies</p>
        </Link>

        <Link to="/exchanges" className="link">
          <img
            src="https://img.icons8.com/glyph-neue/64/FFFFFF/exchange-money-ethereum.png"
            alt="exchange-money-ethereum"
          />
          <p>Exchanges</p>
        </Link>

        <Link to="/news" className="link">
          <img
            src="https://img.icons8.com/ios-filled/50/FFFFFF/google-news.png"
            alt="google-news"
          />
          <p>News</p>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
