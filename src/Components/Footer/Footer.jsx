import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import Logo from "../../Assests/Images/icons8-logo-100.png";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/" className="logo">
        <img src={Logo} alt="" />
        <h1>
          Coin<span>Verse</span>
        </h1>
      </Link>
      <p>&copy;2023</p>
    </div>
  );
};

export default Footer;
