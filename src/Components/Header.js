import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { CiShoppingCart } from "react-icons/ci";

function Header() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <div className="header-section">
      <div className="top-banner">
        <h4> ship Worldwide </h4>
      </div>

      <div className="nav-container">
        <nav>
          <div className="logo">
            <a href="#">
              <img src="/images/logo2.png" alt="logo" />
            </a>
          </div>

          <ul className={`nav-links ${showNavLinks ? "show-nav" : ""}`}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="icons">
            <BsSearch className="icon" />
            <VscAccount className="icon" />
            <CiShoppingCart className="icon" />
          </div>

          <div className="burger" onClick={toggleNavLinks}>
            <div className="ln1"></div>
            <div className="ln2"></div>
            <div className="ln3"></div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
