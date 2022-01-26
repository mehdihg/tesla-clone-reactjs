import React from "react";
import { Link } from "react-router-dom";
import { FooterList } from "../styles/Footer/Footer";

const Footer = () => {
  return (
    <FooterList id="footer">
      <li>
        <Link to="/">Tesla &copy; 2021</Link>
      </li>
      <li>
        <Link to="/">Privacy & Legal</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
      <li>
        <Link to="/">Careers</Link>
      </li>
      <li>
        <Link to="/">News</Link>
      </li>
      <li>
        <Link to="/">Engage</Link>
      </li>
      <li>
        <Link to="/">Locations</Link>
      </li>
    </FooterList>
  );
};

export default Footer;
