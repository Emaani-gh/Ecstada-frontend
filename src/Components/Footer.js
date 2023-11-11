import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-wrap">
        <div>Logo</div>
        <p>Copyright &copy; 2023</p>
        <div className="f-icons">
          <a href="#" className="f-icon"><FaFacebookF /></a>
          <a href="#" className="f-icon"><FaInstagram /></a>
          <a href="#" className="f-icon"><FaTwitter /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
