import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assests/Images/icons8-logo-100.png";
import Avatar from "../../Assests/Images/IMG_1534 2.jpg";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={Logo} alt="" />
        <h1>
          Coin<span>Verse</span>
        </h1>
      </Link>

      <div className="navIcons">
        <img
          src="https://img.icons8.com/ios-glyphs/60/FFFFFF/search--v1.png"
          alt="search--v1"
        />
        <img
          src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/50/FFFFFF/external-thumbnail-ecommerce-user-interface-inkubators-detailed-outline-inkubators.png"
          alt="external-thumbnail-ecommerce-user-interface-inkubators-detailed-outline-inkubators"
        />
        <img
          src="https://img.icons8.com/pastel-glyph/64/FFFFFF/expand.png"
          alt="expand" className="expand"
        />

        <div className="notification">
          <img
            src="https://img.icons8.com/ios-filled/50/FFFFFF/appointment-reminders--v1.png"
            alt="appointment-reminders--v1"
            className="bell"
          />
          <span>2</span>
        </div>

        <img src={Avatar} alt="avatar"  className="avatar"/>
        <img src="https://img.icons8.com/ios-filled/50/FFFFFF/settings.png" alt="settings"/>
      </div>
    </div>
  );
};

export default Navbar;
